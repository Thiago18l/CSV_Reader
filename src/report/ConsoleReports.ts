import { IOutputTarget } from '../Summary';

export class ConsoleReports implements IOutputTarget {
    
    print(report: string): void {
        console.log(report);
    }
}