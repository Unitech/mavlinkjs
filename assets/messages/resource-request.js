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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRequest = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The autopilot is requesting a resource (file, binary, other type of data)
*/
// request_id Request ID. This ID should be re-used when sending back URI contents uint8_t
// uri_type The type of requested URI. 0 = a file via URL. 1 = a UAVCAN binary uint8_t
// uri The requested unique resource identifier (URI). It is not necessarily a straight domain name (depends on the URI type enum) uint8_t
// transfer_type The way the autopilot wants to receive the URI. 0 = MAVLink FTP. 1 = binary stream. uint8_t
// storage The storage path the autopilot wants the URI to be stored in. Will only be valid if the transfer_type has a storage associated (e.g. MAVLink FTP). uint8_t
var ResourceRequest = /** @class */ (function (_super) {
    __extends(ResourceRequest, _super);
    function ResourceRequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 142;
        _this._message_name = 'RESOURCE_REQUEST';
        _this._crc_extra = 72;
        _this._message_fields = [
            ['request_id', 'uint8_t', false],
            ['uri_type', 'uint8_t', false],
            ['uri', 'uint8_t', false],
            ['transfer_type', 'uint8_t', false],
            ['storage', 'uint8_t', false],
        ];
        return _this;
    }
    return ResourceRequest;
}(node_mavlink_1.MAVLinkMessage));
exports.ResourceRequest = ResourceRequest;
//# sourceMappingURL=resource-request.js.map