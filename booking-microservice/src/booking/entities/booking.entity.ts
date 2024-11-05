import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('booking')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  EventID: string;

  @Column('text')
  EventName: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  EventDate: Date;

  @Column('text')
  GuestName: string;

  @Column('text')
  GuestEmail: string;

  @Column('int')
  GuestCount: number;

  @Column('text')
  SpecialRequest: string;
}
