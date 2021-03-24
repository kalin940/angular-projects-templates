import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(message: string): void{
    const dateString: String = new Date().toLocaleTimeString();
    console.log(`${dateString}: ${message}`)
  }
  
  error(message: string): void{
    const dateString: String = new Date().toLocaleTimeString();
    console.log(`Error: ${dateString} - ${message}`)
  }
}
