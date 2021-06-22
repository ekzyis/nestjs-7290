import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import {
  ValidationOptions,
  registerDecorator,
  isNotEmpty,
  ValidationArguments,
  isString,
} from 'class-validator';

const validate = (value: any): boolean =>
  isString(value) && isNotEmpty(value.trim());

const errorMessage = (field: string) => `${field} should be a non-empty string`;

export function IsNotEmptyString(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (object: unknown, propertyName: string) => {
    registerDecorator({
      name: 'isNotEmptyString',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate,
        defaultMessage: (validationArguments?: ValidationArguments): string =>
          errorMessage(validationArguments.property),
      },
    });
  };
}

@Injectable()
export class IsNotEmptyStringPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  transform(value: any, metadata: ArgumentMetadata): string {
    if (!validate(value)) {
      throw Error(errorMessage(metadata.data));
    }
    return value;
  }
}
