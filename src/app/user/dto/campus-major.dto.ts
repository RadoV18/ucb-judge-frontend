import { CampusDto } from "./campus.dto";

export interface CampusMajorDto {
    campusMajorId: number;
    campus:  CampusDto;
    major: MajorDto;
}

export interface MajorDto {
    majorId: number;
    name: string;
}