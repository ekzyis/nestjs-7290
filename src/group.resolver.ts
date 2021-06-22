/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  IsNotEmptyString,
  IsNotEmptyStringPipe,
} from './isNotEmptyString.validator';

type Group = {
  name: string;
};

class UpdateGroupInput {
  @IsNotEmptyString()
  name: string;
}

@Resolver('Group')
export class GroupResolver {
  @Query()
  async group(): Promise<Group> {
    return null;
  }

  @Mutation()
  async updateGroup(@Args('group') group: UpdateGroupInput): Promise<Group> {
    console.log('updateGroup');
    console.log({ name: group.name, type: typeof group.name });
    return null;
  }

  @Mutation()
  async mergeGroups(
    @Args('ids') ids: string[],
    @Args('name', IsNotEmptyStringPipe) name: string,
  ): Promise<Group> {
    console.log('mergeGroups');
    console.log({ name, type: typeof name });
    return null;
  }
}
