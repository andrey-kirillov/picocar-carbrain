//4 - 19, 18
//3 - 16, 17
//2 - 15, 14
//1 - 13, 12

// can also use
// tone(this.inPin2, this.freq, { duty: this.duty })

class DcMotor {
    private readonly inPin1: number;
    private readonly inPin2: number;
    private readonly freq: number;
    private readonly duty: number;

    constructor(inPin1: number, inPin2: number, freq?: number, duty: number = 0.5) {
        this.inPin1 = inPin1;
        this.inPin2 = inPin2;
        this.freq = freq;
        this.duty = duty;

        pinMode(inPin1, 1);
        pinMode(inPin2, 1);
    }


    startForward() {
        analogWrite(this.inPin1, this.duty, this.freq);
        // digitalWrite(this.inPin2, 0)
        analogWrite(this.inPin2, 1, 0);
    }

    startBackward() {
        analogWrite(this.inPin2, this.duty, this.freq);
        // digitalWrite(this.inPin1, 0)
        analogWrite(this.inPin1, 1, 0);
    }

    stop() {
        analogWrite(this.inPin1, 0, 0);
        analogWrite(this.inPin2, 0, 0);
    }
}

export default DcMotor;

// working examples

// analogWrite(this.pwmPin, 0.9, 1);
// digitalWrite(this.dirPin, 1)

// analogWrite(this.dirPin, 0.9, 1);
// digitalWrite(this.pwmPin, 1)

// analogWrite(this.pwmPin, 0.1, 1);
// digitalWrite(this.dirPin, 0)