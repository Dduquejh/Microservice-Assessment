import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  EventName: string;

  @IsNotEmpty()
  EventDate: Date;

  @IsString()
  @IsNotEmpty()
  GuestName: string;

  @IsEmail()
  @IsNotEmpty()
  GuestEmail: string;

  @IsInt()
  @IsPositive()
  GuestCount: number;

  @IsString()
  @IsNotEmpty()
  SpecialRequest: string;
}
