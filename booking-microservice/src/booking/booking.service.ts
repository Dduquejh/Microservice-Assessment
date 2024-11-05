import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const booking = this.bookingRepository.create(createBookingDto);
    return await this.bookingRepository.save(booking);
  }

  async findAll() {
    const bookings = await this.bookingRepository.find();
    return bookings;
  }

  async findOne(id: string) {
    const booking = await this.bookingRepository.findOneBy({ EventID: id });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return booking;
  }

  async update(id: string, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepository.preload({
      EventID: id,
      ...updateBookingDto,
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return await this.bookingRepository.save(booking);
  }

  async remove(id: string) {
    const booking = await this.findOne(id);
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    await this.bookingRepository.delete(booking);
    return booking;
  }
}
