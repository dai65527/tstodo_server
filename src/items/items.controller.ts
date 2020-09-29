import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from "./items.service";
import { Item } from "./item.entity";

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post('add')
  async addItem(@Body() item: { name: string }) {
    return await this.itemsService.addItem(item.name);
  }

  @Post('done/:id')
  async changeDone(@Param('id') id: string): Promise<void> {
    return await this.itemsService.changeDone(id);
  }

  @Post('delete/:id')
  async deleteOne(@Param('id') id: string): Promise<void> {
    return await this.itemsService.deleteItem(id);
  }

  @Post('delete')
  async deleteDone(): Promise<void> {
    return await this.itemsService.deleteDone();
  }
}
