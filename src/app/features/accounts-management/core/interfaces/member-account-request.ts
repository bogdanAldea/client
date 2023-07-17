import { Role } from "./role";

export interface MemberAccountRequest {
    firstName: string;
    lastName: string;
    email: string;
    companyId: string;
    roles: string[];
}