import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @MessagePattern({ cmd: 'createBooking' })
  create(@Payload() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @MessagePattern({ cmd: 'findAllBooking' })
  findAll() {
    return this.bookingService.findAll();
  }

  @MessagePattern({ cmd: 'findOneBooking' })
  findOne(@Payload() id: string) {
    return this.bookingService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateBooking' })
  update(@Payload() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(
      updateBookingDto.EventID,
      updateBookingDto,
    );
  }

  @MessagePattern({ cmd: 'removeBooking' })
  remove(@Payload() id: string) {
    return this.bookingService.remove(id);
  }
}
