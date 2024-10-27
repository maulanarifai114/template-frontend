export interface Profile {
  id?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role?: Role;
}

export type RoleId = "1" | "2" | "3";

export type RoleName = "SUPERADMIN" | "ADMIN" | "USER";

export interface Role {
  id: RoleId;
  name: RoleName;
}

export interface MediaUrl {
  url: string;
}

export interface PaginatedResponse<T> {
  total: number;
  list: T[];
}
