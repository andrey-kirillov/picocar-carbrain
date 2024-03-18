// M4 - PIN 19, 18
// M3 - PIN 16, 17
// M2 - PIN 15, 14
// M1 - PIN 13, 12

class DcMotor {
    private readonly inPin1: number;
    private readonly inPin2: number;
    private readonly freq: number;
    private readonly duty: number;
    private isBusy: 'forward' | 'backward' | 'stop' = 'stop';

    private static staticDuty: number;
    private static staticFreq: number;

    constructor(inPin1: number, inPin2: number, freq?: number, duty: number = 0.5) {
        this.inPin1 = inPin1;
        this.inPin2 = inPin2;
        this.freq = freq;
        this.duty = duty;

        pinMode(inPin1, 1);
        pinMode(inPin2, 1);
    }

    static setGlobalSpeed = (instance: DcMotor, duty?: number, freq?: number) => {

        if (typeof duty !== 'undefined')
            DcMotor.staticDuty = duty;
        if (typeof freq !== 'undefined')
            DcMotor.staticFreq = freq;

        if (instance.isBusy === 'forward')
            instance.startForward();

        if (instance.isBusy === 'backward')
            instance.startBackward();

    }

    startForward() {
        this.isBusy = 'forward';
        analogWrite(this.inPin2, DcMotor.staticDuty ?? this.duty, DcMotor.staticFreq ?? this.freq);
    }

    startBackward() {
        this.isBusy = 'backward';
        analogWrite(this.inPin1, DcMotor.staticDuty ?? this.duty, DcMotor.staticFreq ?? this.freq);
    }

    stop() {
        this.isBusy = 'stop';
        analogWrite(this.inPin1, 0, DcMotor.staticFreq ?? this.freq);
        analogWrite(this.inPin2, 0, DcMotor.staticFreq ?? this.freq);
    }
}

export default DcMotor;
