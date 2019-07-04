"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RequestHandler_1 = __importDefault(require("../../RequestHandler"));
var TimeStamp_1 = __importDefault(require("../../../../processing/timestamp/TimeStamp"));
var NewOrderInitialize = /** @class */ (function (_super) {
    __extends(NewOrderInitialize, _super);
    function NewOrderInitialize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewOrderInitialize.prototype.handle = function (req, res) {
        var userID = req.body.userID;
        var timeStamp = TimeStamp_1.default.getInstance();
        var date = timeStamp.dateMonthYear();
        var time = timeStamp.time();
        var query = "insert into Orders(USER_ID,DATE,TIME) values(?,?,?)";
        this.pool.query(query, [userID, date, time]).then(function (result) { return res.json({ ORDER_ID: result['insertId'] }); });
    };
    return NewOrderInitialize;
}(RequestHandler_1.default));
exports.default = NewOrderInitialize;
