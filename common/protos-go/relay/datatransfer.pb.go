// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.17.3
// source: relay/datatransfer.proto

package relay

import (
	common "github.com/hyperledger-labs/weaver-dlt-interoperability/common/protos-go/common"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_relay_datatransfer_proto protoreflect.FileDescriptor

var file_relay_datatransfer_proto_rawDesc = []byte{
	0x0a, 0x18, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x74, 0x72, 0x61, 0x6e,
	0x73, 0x66, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x12, 0x72, 0x65, 0x6c, 0x61,
	0x79, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x66, 0x65, 0x72, 0x1a, 0x10,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x61, 0x63, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x12, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x71, 0x75, 0x65,
	0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xc2, 0x01, 0x0a, 0x0c, 0x44, 0x61, 0x74,
	0x61, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x66, 0x65, 0x72, 0x12, 0x36, 0x0a, 0x0c, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x13, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x71, 0x75, 0x65, 0x72, 0x79, 0x2e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x1a, 0x0f,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x61, 0x63, 0x6b, 0x2e, 0x41, 0x63, 0x6b, 0x22,
	0x00, 0x12, 0x39, 0x0a, 0x09, 0x53, 0x65, 0x6e, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x19,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x56, 0x69,
	0x65, 0x77, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x1a, 0x0f, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x61, 0x63, 0x6b, 0x2e, 0x41, 0x63, 0x6b, 0x22, 0x00, 0x12, 0x3f, 0x0a, 0x0f,
	0x53, 0x65, 0x6e, 0x64, 0x44, 0x72, 0x69, 0x76, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12,
	0x19, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x56,
	0x69, 0x65, 0x77, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x1a, 0x0f, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x61, 0x63, 0x6b, 0x2e, 0x41, 0x63, 0x6b, 0x22, 0x00, 0x42, 0x76, 0x0a,
	0x24, 0x63, 0x6f, 0x6d, 0x2e, 0x77, 0x65, 0x61, 0x76, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x74, 0x72, 0x61,
	0x6e, 0x73, 0x66, 0x65, 0x72, 0x5a, 0x4e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x68, 0x79, 0x70, 0x65, 0x72, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x72, 0x2d, 0x6c, 0x61,
	0x62, 0x73, 0x2f, 0x77, 0x65, 0x61, 0x76, 0x65, 0x72, 0x2d, 0x64, 0x6c, 0x74, 0x2d, 0x69, 0x6e,
	0x74, 0x65, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x2f, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2d, 0x67, 0x6f, 0x2f,
	0x72, 0x65, 0x6c, 0x61, 0x79, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_relay_datatransfer_proto_goTypes = []interface{}{
	(*common.Query)(nil),       // 0: common.query.Query
	(*common.ViewPayload)(nil), // 1: common.state.ViewPayload
	(*common.Ack)(nil),         // 2: common.ack.Ack
}
var file_relay_datatransfer_proto_depIdxs = []int32{
	0, // 0: relay.datatransfer.DataTransfer.RequestState:input_type -> common.query.Query
	1, // 1: relay.datatransfer.DataTransfer.SendState:input_type -> common.state.ViewPayload
	1, // 2: relay.datatransfer.DataTransfer.SendDriverState:input_type -> common.state.ViewPayload
	2, // 3: relay.datatransfer.DataTransfer.RequestState:output_type -> common.ack.Ack
	2, // 4: relay.datatransfer.DataTransfer.SendState:output_type -> common.ack.Ack
	2, // 5: relay.datatransfer.DataTransfer.SendDriverState:output_type -> common.ack.Ack
	3, // [3:6] is the sub-list for method output_type
	0, // [0:3] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_relay_datatransfer_proto_init() }
func file_relay_datatransfer_proto_init() {
	if File_relay_datatransfer_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_relay_datatransfer_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_relay_datatransfer_proto_goTypes,
		DependencyIndexes: file_relay_datatransfer_proto_depIdxs,
	}.Build()
	File_relay_datatransfer_proto = out.File
	file_relay_datatransfer_proto_rawDesc = nil
	file_relay_datatransfer_proto_goTypes = nil
	file_relay_datatransfer_proto_depIdxs = nil
}
