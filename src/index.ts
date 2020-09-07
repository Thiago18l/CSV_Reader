import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReports } from './report/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csv_Reader = new CsvFileReader("football.csv");

const match_Reader = new MatchReader(csv_Reader);
match_Reader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReports());

summary.buildAndPrintReport(match_Reader.matches);