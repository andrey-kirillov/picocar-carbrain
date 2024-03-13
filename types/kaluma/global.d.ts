declare function delay(delay: number): void;

declare function pinMode(pin: number, dir: 1 | 2 | 3 | 4 ): void;

declare function analogWrite(pin: number, duty?: number, freq?: number): void;
declare function tone(pin: number, duty?: number, options?: any): void;
declare function noTone(pin: number): void;

declare function digitalWrite(pin: number, on: number): void;