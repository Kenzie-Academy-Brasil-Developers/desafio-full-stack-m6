import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsPrismaRepository } from './repository/prisma/clients.prisma.repository';

@Injectable()
export class ClientsService {
  constructor(private clientsRepositoey: ClientsPrismaRepository) {}

  create(createClientDto: CreateClientDto) {
    return this.clientsRepositoey.create(createClientDto);
  }

  findAll() {
    return this.clientsRepositoey.findAll();
  }

  findOne(id: number) {
    return this.clientsRepositoey.findOne(id);
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientsRepositoey.update(id, updateClientDto);
  }

  remove(id: number) {
    return this.clientsRepositoey.delete(id);
  }
}
