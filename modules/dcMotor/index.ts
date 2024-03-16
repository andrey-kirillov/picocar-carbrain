// M4 - PIN 19, 18
// M3 - PIN 16, 17
// M2 - PIN 15, 14
// M1 - PIN 13, 12

class DcMotor {
    private readonly inPin1: number;
    private readonly inPin2: number;
    private readonly freq: number;
    private readonly duty: number;

    private static staticDuty: number;

    constructor(inPin1: number, inPin2: number, freq?: number, duty: number = 0.5) {
        this.inPin1 = inPin1;
        this.inPin2 = inPin2;
        this.freq = freq;
        this.duty = duty;

        pinMode(inPin1, 1);
        pinMode(inPin2, 1);
    }

    static setGlobalSpeed(speed: number) {
        DcMotor.staticDuty = speed;
    }

    startForward() {
        analogWrite(this.inPin2, DcMotor.staticDuty ?? this.duty, this.freq);
    }

    startBackward() {
        analogWrite(this.inPin1, DcMotor.staticDuty ?? this.duty, this.freq);
    }

    stop() {
        analogWrite(this.inPin1, 0, this.freq);
        analogWrite(this.inPin2, 0, this.freq);
    }
}

export default DcMotor;
