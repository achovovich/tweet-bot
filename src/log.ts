import * as fs from 'fs';


class Log {

	private log(text: any, file: string = "log.json") {
	  file = "logs/"+file;

	  if (typeof text === "object") text = JSON.stringify(text);

	  fs.appendFile(file, new Date() + " | " + text + "\n");
	}

	engagement(text : string) { this.log(text, "engagement.json"); }
	error     (error: any   ) { this.log(`error: [${error.code}] ${error.message}`, "error.json" ); }
	warning   (text : string) { this.log(text, "warning.json"   ); }
	timeline  (text : string) { this.log(text, "timeline.json"     ); }
}


export const log = new Log();
