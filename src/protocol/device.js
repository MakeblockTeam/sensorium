/**
 * @fileOverview all electronic module‘s type.
 */

var device = {
    "VERSION":                0,
    "ULTRASONIC_SENSOR":      1,
    "TEMPERATURE_SENSOR":     2,
    "LIGHT_SENSOR":           3,
    "POTENTIONMETER":         4,
    "JOYSTICK":               5,
    "GYRO":                   6,
    "SOUND_SENSOR":           7,
    "RGBLED":                 8,
    "SEVSEG":                 9,
    "MOTOR":                  10,
    "SERVO":                  11,
    "ENCODER":                12,
    "IR":                     13,
    "PIRMOTION":              15,
    "INFRARED":               16,
    "LINEFOLLOWER":           17,
    "SHUTTER":                20,
    "LIMITSWITCH":            21,
    "BUTTON":                 22,
    "HUMITURE":               23,
    "FLAMESENSOR":            24,
    "GASSENSOR":              25,
    "COMPASS":                26,
    "TEMPERATURE_SENSOR_1":   27,
    "DIGITAL":                30,
    "ANALOG":                 31,
    "PWM":                    32,
    "SERVO_PIN":              33,
    "TONE":                   34,
    "BUTTON_INNER":           35,
    "ULTRASONIC_ARDUINO":     36,
    "PULSEIN":                37,
    "STEPPER":                40,
    "LEDMATRIX":              41,
    "TIMER":                  50,
    "TOUCH_SENSOR":           51,
    "JOYSTICK_MOVE":          52,
    "COMMON_COMMONCMD":       60,
      //Secondary command
      "SET_STARTER_MODE":     0x10,
      "SET_AURIGA_MODE":      0x11,
      "SET_MEGAPI_MODE":      0x12,
      "GET_BATTERY_POWER":    0x70,
      "GET_AURIGA_MODE":      0x71,
      "GET_MEGAPI_MODE":      0x72,
    "ENCODER_BOARD":          61,
      //Read type
      "ENCODER_BOARD_POS":    0x01,
      "ENCODER_BOARD_SPEED":  0x02
};

module.exports = device;