import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UsersService {
    users = [
        {
            name: 'Manu',
            status: 'active'
        },
        {
            name: 'Chris',
            status: 'active'
        },
        {
            name: 'Max',
            status: 'inactive'
        },
        {
            name: 'Anna',
            status: 'inactive'
        }
    ];

    TotalCount: number = 0;

    constructor(private countSr: CountService){}

    updateStatus(id: number, newStatus: string) {
        this.users[id].status = newStatus;
        this.countSr.TotalCountIncrement();
        this.TotalCount = this.countSr.TotalCount;
    }
}