
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UpdateGroupInput {
    name?: string;
}

export class Group {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract group(): Group | Promise<Group>;
}

export abstract class IMutation {
    abstract updateGroup(id: string, group: UpdateGroupInput): Group | Promise<Group>;

    abstract mergeGroups(ids: string[], name: string): Group | Promise<Group>;
}
