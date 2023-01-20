export class CountService {
    TotalCount: number = 0;
    TotalCountIncrement() {
        this.TotalCount += 1;
    }
}