import { MatchData } from './MatchData';
export interface IAnalyzer {
    run(matches: MatchData[]): string;
}
export interface IOutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor (
        public analyzer: IAnalyzer, 
        public output: IOutputTarget
        ) {}
    buildAndPrintReport(matches: MatchData[]): void {
        const result = this.analyzer.run(matches);
        this.output.print(result);
    }
}