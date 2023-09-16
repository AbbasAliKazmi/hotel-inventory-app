import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelname = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 401,
        roomType: "Deluxe Room",
        amenities: "AC , TV",
        price: 4500,
        photos: "Available",
        checknTime: new Date("11-Nov-2023"),
        checkOutTime: new Date("13-Dec-2023"),
        rating: 4.5
      },
      {
        roomNumber: 402,
        roomType: "Vip Room",
        amenities: "Fridge , TV",
        price: 7500,
        photos: "Available",
        checknTime: new Date("11-DEC-2023"),
        checkOutTime: new Date("13-an-2024"),
        rating: 4.6
      },
      {
        roomNumber: 403,
        roomType: "Private Room",
        amenities: "Nar , TV",
        price: 1000,
        photos: "Available",
        checknTime: new Date("16-Nov-2023"),
        checkOutTime: new Date("18-Dec-2023"),
        rating: 3.9
      }
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms
  }

}
