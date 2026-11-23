(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z3;
  var initMetadataForInterface = kotlin_kotlin.$_$.n3;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.k3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.o;
  var objectCreate = kotlin_kotlin.$_$.y3;
  var captureStack = kotlin_kotlin.$_$.v2;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.p;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException = kotlin_kotlin.$_$.d5;
  var toString = kotlin_kotlin.$_$.b4;
  var THROW_CCE = kotlin_kotlin.$_$.f5;
  var isInterface = kotlin_kotlin.$_$.s3;
  var emptyList = kotlin_kotlin.$_$.o1;
  var isBlank = kotlin_kotlin.$_$.o4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var equals = kotlin_kotlin.$_$.d3;
  var toList = kotlin_kotlin.$_$.m2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var toHashSet = kotlin_kotlin.$_$.k2;
  var copyToArray = kotlin_kotlin.$_$.n1;
  var toBooleanArray = kotlin_kotlin.$_$.j2;
  var withIndex = kotlin_kotlin.$_$.p2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.r5;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var toMap = kotlin_kotlin.$_$.n2;
  var lazy = kotlin_kotlin.$_$.n5;
  var contentEquals = kotlin_kotlin.$_$.i1;
  var until = kotlin_kotlin.$_$.i4;
  var joinToString = kotlin_kotlin.$_$.v1;
  var KProperty1 = kotlin_kotlin.$_$.k4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.h3;
  var initMetadataForObject = kotlin_kotlin.$_$.p3;
  var ensureNotNull = kotlin_kotlin.$_$.j5;
  var getStringHashCode = kotlin_kotlin.$_$.i3;
  var toIntOrNull = kotlin_kotlin.$_$.w4;
  var hashCode = kotlin_kotlin.$_$.j3;
  var ArrayList = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.g;
  var KtList = kotlin_kotlin.$_$.e1;
  var isArray = kotlin_kotlin.$_$.q3;
  var arrayIterator = kotlin_kotlin.$_$.t2;
  var asList = kotlin_kotlin.$_$.g1;
  var Collection = kotlin_kotlin.$_$.c1;
  var longArray = kotlin_kotlin.$_$.t3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l3;
  var get_lastIndex = kotlin_kotlin.$_$.w1;
  var Long = kotlin_kotlin.$_$.e5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.i5;
  var indexOf = kotlin_kotlin.$_$.s1;
  var contentToString = kotlin_kotlin.$_$.k1;
  var Enum = kotlin_kotlin.$_$.b5;
  var fillArrayVal = kotlin_kotlin.$_$.e3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var booleanArray = kotlin_kotlin.$_$.u2;
  var emptyMap = kotlin_kotlin.$_$.p1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy_0 = kotlin_kotlin.$_$.m5;
  var contentHashCode = kotlin_kotlin.$_$.j1;
  var charSequenceLength = kotlin_kotlin.$_$.z2;
  var lastOrNull = kotlin_kotlin.$_$.y1;
  var get_lastIndex_0 = kotlin_kotlin.$_$.x1;
  var KtMap = kotlin_kotlin.$_$.f1;
  var KClass = kotlin_kotlin.$_$.j4;
  var get_indices = kotlin_kotlin.$_$.u1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t;
  var get_indices_0 = kotlin_kotlin.$_$.t1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.vb(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.he(descriptor, index, deserializer, previousValue) : $super.he.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.be(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ub(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.tb().ac();
    if (isNullabilitySupported) {
      return this.bf(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.qe();
    } else {
      this.ef();
      this.bf(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.pk(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.wb(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.xb());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.yb(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.xb());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.h() === 1 ? "Field '" + missingFields.n(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.zb_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.tb().ac()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function ContextDescriptor() {
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.bc(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.tb();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.fc_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.cc_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.rc_1 = $this_elementDescriptors;
    this.qc_1 = $this_elementDescriptors.jc();
  }
  protoOf(elementDescriptors$1).f = function () {
    return this.qc_1 > 0;
  };
  protoOf(elementDescriptors$1).g = function () {
    var tmp = this.rc_1.jc();
    var tmp1 = this.qc_1;
    this.qc_1 = tmp1 - 1 | 0;
    return this.rc_1.oc(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.sc_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).e = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.sc_1);
  };
  function elementNames$1($this_elementNames) {
    this.uc_1 = $this_elementNames;
    this.tc_1 = $this_elementNames.jc();
  }
  protoOf(elementNames$1).f = function () {
    return this.tc_1 > 0;
  };
  protoOf(elementNames$1).g = function () {
    var tmp = this.uc_1.jc();
    var tmp1 = this.tc_1;
    this.tc_1 = tmp1 - 1 | 0;
    return this.uc_1.lc(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.vc_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).e = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.vc_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.zc_1.h(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.wc_1 = serialName;
    this.xc_1 = false;
    this.yc_1 = emptyList();
    this.zc_1 = ArrayList_init_$Create$();
    this.ad_1 = HashSet_init_$Create$();
    this.bd_1 = ArrayList_init_$Create$();
    this.cd_1 = ArrayList_init_$Create$();
    this.dd_1 = ArrayList_init_$Create$();
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.pd_1;
    _hashCode$factory();
    return this_0.f1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.od_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.lc(it) + ': ' + this$0.oc(it).gc();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.ed_1 = serialName;
    this.fd_1 = kind;
    this.gd_1 = elementsCount;
    this.hd_1 = builder.yc_1;
    this.id_1 = toHashSet(builder.zc_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.zc_1;
    tmp.jd_1 = copyToArray(this_0);
    this.kd_1 = compactArray(builder.bd_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.cd_1;
    tmp_0.ld_1 = copyToArray(this_1);
    this.md_1 = toBooleanArray(builder.dd_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.jd_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.e();
    while (tmp0_iterator.f()) {
      var item = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.p9_1, item.o9_1);
      destination.m(tmp$ret$2);
    }
    tmp_1.nd_1 = toMap(destination);
    this.od_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.pd_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).gc = function () {
    return this.ed_1;
  };
  protoOf(SerialDescriptorImpl).hc = function () {
    return this.fd_1;
  };
  protoOf(SerialDescriptorImpl).jc = function () {
    return this.gd_1;
  };
  protoOf(SerialDescriptorImpl).kc = function () {
    return this.hd_1;
  };
  protoOf(SerialDescriptorImpl).qd = function () {
    return this.id_1;
  };
  protoOf(SerialDescriptorImpl).lc = function (index) {
    return getChecked(this.jd_1, index);
  };
  protoOf(SerialDescriptorImpl).mc = function (name) {
    var tmp0_elvis_lhs = this.nd_1.h1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).nc = function (index) {
    return getChecked(this.ld_1, index);
  };
  protoOf(SerialDescriptorImpl).oc = function (index) {
    return getChecked(this.kd_1, index);
  };
  protoOf(SerialDescriptorImpl).pc = function (index) {
    return getChecked_0(this.md_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gc() === other.gc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.od_1, other.od_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jc() === other.jc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jc();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oc(index).gc() === other.oc(index).gc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oc(index).hc(), other.oc(index).hc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.gd_1);
    var tmp_0 = this.ed_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).i7());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function PolymorphicKind() {
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).rd = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).sd = function () {
    return true;
  };
  protoOf(AbstractDecoder).td = function () {
    return null;
  };
  protoOf(AbstractDecoder).ud = function () {
    var tmp = this.rd();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vd = function () {
    var tmp = this.rd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wd = function () {
    var tmp = this.rd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xd = function () {
    var tmp = this.rd();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yd = function (enumDescriptor) {
    var tmp = this.rd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zd = function (deserializer, previousValue) {
    return this.ae(deserializer);
  };
  protoOf(AbstractDecoder).be = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ce = function (descriptor) {
  };
  protoOf(AbstractDecoder).de = function (descriptor, index) {
    return this.ud();
  };
  protoOf(AbstractDecoder).ee = function (descriptor, index) {
    return this.vd();
  };
  protoOf(AbstractDecoder).fe = function (descriptor, index) {
    return this.wd();
  };
  protoOf(AbstractDecoder).ge = function (descriptor, index) {
    return this.xd();
  };
  protoOf(AbstractDecoder).he = function (descriptor, index, deserializer, previousValue) {
    return this.zd(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).je = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.tb().ac();
    var tmp;
    if (isNullabilitySupported || this.sd()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.zd(deserializer, previousValue);
    } else {
      tmp = this.td();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).be = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ce = function (descriptor) {
  };
  protoOf(AbstractEncoder).oe = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).pe = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).qe = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).re = function (value) {
    return this.pe(value);
  };
  protoOf(AbstractEncoder).se = function (value) {
    return this.pe(value);
  };
  protoOf(AbstractEncoder).te = function (value) {
    return this.pe(value);
  };
  protoOf(AbstractEncoder).ue = function (value) {
    return this.pe(value);
  };
  protoOf(AbstractEncoder).ve = function (enumDescriptor, index) {
    return this.pe(index);
  };
  protoOf(AbstractEncoder).we = function (descriptor, index, value) {
    if (this.oe(descriptor, index)) {
      this.re(value);
    }
  };
  protoOf(AbstractEncoder).xe = function (descriptor, index, value) {
    if (this.oe(descriptor, index)) {
      this.se(value);
    }
  };
  protoOf(AbstractEncoder).ye = function (descriptor, index, value) {
    if (this.oe(descriptor, index)) {
      this.te(value);
    }
  };
  protoOf(AbstractEncoder).ze = function (descriptor, index, value) {
    if (this.oe(descriptor, index)) {
      this.ue(value);
    }
  };
  protoOf(AbstractEncoder).af = function (descriptor, index, serializer, value) {
    if (this.oe(descriptor, index)) {
      this.bf(serializer, value);
    }
  };
  protoOf(AbstractEncoder).cf = function (descriptor, index, serializer, value) {
    if (this.oe(descriptor, index)) {
      this.df(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).yb = function (decoder, klassName) {
    return decoder.ke().hf(this.xb(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).wb = function (encoder, value) {
    return encoder.ke().if(this.xb(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.i7();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.i7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.i7() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).gc = function () {
    return 'kotlin.collections.ArrayList';
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).gc = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.lf_1 = elementDescriptor;
    this.mf_1 = 1;
  }
  protoOf(ListLikeDescriptor).hc = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).jc = function () {
    return this.mf_1;
  };
  protoOf(ListLikeDescriptor).lc = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).mc = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).pc = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.gc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).nc = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.gc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).oc = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.gc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.lf_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.lf_1, other.lf_1) && this.gc() === other.gc())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.lf_1), 31) + getStringHashCode(this.gc()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.gc() + '(' + toString(this.lf_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.qf_1 = new ArrayListClassDesc(element.tb());
  }
  protoOf(ArrayListSerializer).tb = function () {
    return this.qf_1;
  };
  protoOf(ArrayListSerializer).rf = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).sf = function (_this__u8e3s4) {
    return _this__u8e3s4.h();
  };
  protoOf(ArrayListSerializer).tf = function (_this__u8e3s4) {
    return this.sf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).uf = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).vf = function (_this__u8e3s4) {
    return this.uf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).wf = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).xf = function (_this__u8e3s4) {
    return this.wf((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).yf = function (_this__u8e3s4, size) {
    return _this__u8e3s4.z3(size);
  };
  protoOf(ArrayListSerializer).zf = function (_this__u8e3s4, size) {
    return this.yf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).ag = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g3(index, element);
  };
  protoOf(ArrayListSerializer).bg = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.ag(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.mg_1 = kClass;
    this.ng_1 = new ArrayClassDesc(eSerializer.tb());
  }
  protoOf(ReferenceArraySerializer).tb = function () {
    return this.ng_1;
  };
  protoOf(ReferenceArraySerializer).og = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).pg = function (_this__u8e3s4) {
    return this.og((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).qg = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).rg = function (_this__u8e3s4) {
    return this.qg((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).rf = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ReferenceArraySerializer).sg = function (_this__u8e3s4) {
    return _this__u8e3s4.h();
  };
  protoOf(ReferenceArraySerializer).tf = function (_this__u8e3s4) {
    return this.sg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).tg = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.mg_1);
  };
  protoOf(ReferenceArraySerializer).vf = function (_this__u8e3s4) {
    return this.tg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ug = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).xf = function (_this__u8e3s4) {
    return this.ug((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).vg = function (_this__u8e3s4, size) {
    return _this__u8e3s4.z3(size);
  };
  protoOf(ReferenceArraySerializer).zf = function (_this__u8e3s4, size) {
    return this.vg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).wg = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g3(index, element);
  };
  protoOf(ReferenceArraySerializer).bg = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.wg(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).dg = function (_this__u8e3s4) {
    return _this__u8e3s4.h();
  };
  protoOf(CollectionSerializer).pg = function (_this__u8e3s4) {
    return this.dg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).eg = function (_this__u8e3s4) {
    return _this__u8e3s4.e();
  };
  protoOf(CollectionSerializer).rg = function (_this__u8e3s4) {
    return this.eg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.fg_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).gg = function (encoder, value) {
    var size = this.pg(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.tb();
    var composite = encoder.ff(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.rg(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.af(this.tb(), index, this.fg_1, iterator.g());
      }
       while (inductionVariable < size);
    composite.ce(descriptor);
  };
  protoOf(CollectionLikeSerializer).ub = function (encoder, value) {
    return this.gg(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).hg = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.ig(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ig = function (decoder, index, builder, checkIndex) {
    this.bg(builder, index, decoder.ie(this.tb(), index, this.fg_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.ne($this.tb());
    $this.zf(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).kg = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.xf(previous);
    var builder = tmp1_elvis_lhs == null ? this.rf() : tmp1_elvis_lhs;
    var startIndex = this.tf(builder);
    var compositeDecoder = decoder.be(this.tb());
    if (compositeDecoder.le()) {
      this.hg(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.me(this.tb());
        if (index === -1)
          break $l$loop;
        this.jg(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.ce(this.tb());
    return this.vf(builder);
  };
  protoOf(AbstractCollectionSerializer).vb = function (decoder) {
    return this.kg(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).jg = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ig(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ig.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.xg_1 = longArray(0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).a2(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.bh_1[slot] = $this.bh_1[slot].b2((new Long(1, 0)).a2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.bh_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.bh_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.z1());
          slotMarks = slotMarks.b2((new Long(1, 0)).a2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.zg_1($this.yg_1, index)) {
            $this.bh_1[slot] = slotMarks;
            return index;
          }
        }
        $this.bh_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.yg_1 = descriptor;
    this.zg_1 = readIfAbsent;
    var elementsCount = this.yg_1.jc();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).a2(elementsCount);
      }
      tmp.ah_1 = tmp_0;
      this.bh_1 = Companion_getInstance().xg_1;
    } else {
      this.ah_1 = new Long(0, 0);
      this.bh_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ch = function (index) {
    if (index < 64) {
      this.ah_1 = this.ah_1.b2((new Long(1, 0)).a2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).dh = function () {
    var elementsCount = this.yg_1.jc();
    while (!this.ah_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.ah_1.z1());
      this.ah_1 = this.ah_1.b2((new Long(1, 0)).a2(index));
      if (this.zg_1(this.yg_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.eh_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.eh_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.th(element.k1_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.fh_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.eh_1 = values;
    this.fh_1 = null;
    var tmp = this;
    tmp.gh_1 = lazy(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).tb = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.gh_1;
    descriptor$factory();
    return this_0.f1();
  };
  protoOf(EnumSerializer).uh = function (encoder, value) {
    var index = indexOf(this.eh_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.tb().gc() + ', ' + ('must be one of ' + contentToString(this.eh_1)));
    }
    encoder.ve(this.tb(), index);
  };
  protoOf(EnumSerializer).ub = function (encoder, value) {
    return this.uh(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).vb = function (decoder) {
    var index = decoder.yd(this.tb());
    if (!(0 <= index ? index <= (this.eh_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.tb().gc() + ' enum values, ' + ('values size is ' + this.eh_1.length));
    }
    return this.eh_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.tb().gc() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ii_1;
    elementDescriptors$factory();
    return this_0.f1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.lc(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.hi_1 = ENUM_getInstance();
    var tmp = this;
    tmp.ii_1 = lazy(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).hc = function () {
    return this.hi_1;
  };
  protoOf(EnumDescriptor).oc = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.hc() === ENUM_getInstance()))
      return false;
    if (!(this.gc() === other.gc()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.gc() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.gc());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.tb();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.xi_1 = true;
  }
  protoOf(InlineClassDescriptor).ic = function () {
    return this.xi_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gc() === other.gc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.xi_1 && contentEquals(this.ji(), other.ji()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jc() === other.jc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jc();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oc(index).gc() === other.oc(index).gc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oc(index).hc(), other.oc(index).hc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.yi_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).zi = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.yi_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).tb = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ub = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).vb = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.bj_1 = serializer;
    this.cj_1 = new SerialDescriptorForNullable(this.bj_1.tb());
  }
  protoOf(NullableSerializer).tb = function () {
    return this.cj_1;
  };
  protoOf(NullableSerializer).dj = function (encoder, value) {
    if (!(value == null)) {
      encoder.ef();
      encoder.bf(this.bj_1, value);
    } else {
      encoder.qe();
    }
  };
  protoOf(NullableSerializer).ub = function (encoder, value) {
    return this.dj(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).vb = function (decoder) {
    return decoder.sd() ? decoder.ae(this.bj_1) : decoder.td();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.bj_1, other.bj_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.bj_1);
  };
  function SerialDescriptorForNullable(original) {
    this.cc_1 = original;
    this.dc_1 = this.cc_1.gc() + '?';
    this.ec_1 = cachedSerialNames(this.cc_1);
  }
  protoOf(SerialDescriptorForNullable).kc = function () {
    return this.cc_1.kc();
  };
  protoOf(SerialDescriptorForNullable).jc = function () {
    return this.cc_1.jc();
  };
  protoOf(SerialDescriptorForNullable).ic = function () {
    return this.cc_1.ic();
  };
  protoOf(SerialDescriptorForNullable).hc = function () {
    return this.cc_1.hc();
  };
  protoOf(SerialDescriptorForNullable).nc = function (index) {
    return this.cc_1.nc(index);
  };
  protoOf(SerialDescriptorForNullable).oc = function (index) {
    return this.cc_1.oc(index);
  };
  protoOf(SerialDescriptorForNullable).mc = function (name) {
    return this.cc_1.mc(name);
  };
  protoOf(SerialDescriptorForNullable).lc = function (index) {
    return this.cc_1.lc(index);
  };
  protoOf(SerialDescriptorForNullable).pc = function (index) {
    return this.cc_1.pc(index);
  };
  protoOf(SerialDescriptorForNullable).gc = function () {
    return this.dc_1;
  };
  protoOf(SerialDescriptorForNullable).qd = function () {
    return this.ec_1;
  };
  protoOf(SerialDescriptorForNullable).ac = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.cc_1, other.cc_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.cc_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.cc_1), 31);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.qd();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.jc());
    var inductionVariable = 0;
    var last = _this__u8e3s4.jc();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.lc(i);
        result.m(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.o())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.lc(i);
          missingFields.m(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.gc());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.qh_1;
    childSerializers$factory();
    return this_0.f1();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.sh_1;
    _hashCode$factory_0();
    return this_0.f1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.lh_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.lh_1[i];
        indices.s3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ih_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zi();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ih_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.aj();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.tb();
          destination.m(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ji());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.lc(i) + ': ' + this$0.oc(i).gc();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.hh_1 = serialName;
    this.ih_1 = generatedSerializer;
    this.jh_1 = elementsCount;
    this.kh_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.jh_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.lh_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.jh_1;
    tmp_3.mh_1 = fillArrayVal(Array(size), null);
    this.nh_1 = null;
    this.oh_1 = booleanArray(this.jh_1);
    this.ph_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.qh_1 = lazy_0(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.rh_1 = lazy_0(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.sh_1 = lazy_0(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).gc = function () {
    return this.hh_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).jc = function () {
    return this.jh_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).hc = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).kc = function () {
    var tmp0_elvis_lhs = this.nh_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).qd = function () {
    return this.ph_1.i1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ji = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.rh_1;
    typeParameterDescriptors$factory();
    return this_0.f1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ki = function (name, isOptional) {
    this.kh_1 = this.kh_1 + 1 | 0;
    this.lh_1[this.kh_1] = name;
    this.oh_1[this.kh_1] = isOptional;
    this.mh_1[this.kh_1] = null;
    if (this.kh_1 === (this.jh_1 - 1 | 0)) {
      this.ph_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).th = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ki(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ki.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).oc = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).tb();
  };
  protoOf(PluginGeneratedSerialDescriptor).pc = function (index) {
    return getChecked_0(this.oh_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).nc = function (index) {
    var tmp0_elvis_lhs = getChecked(this.mh_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).lc = function (index) {
    return getChecked(this.lh_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).mc = function (name) {
    var tmp0_elvis_lhs = this.ph_1.h1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gc() === other.gc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.ji(), other.ji())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jc() === other.jc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jc();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oc(index).gc() === other.oc(index).gc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oc(index).hc(), other.oc(index).hc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.jh_1);
    var tmp_0 = this.gc() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.gc());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.gc();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.e();
    while (tmp0_iterator_0.f()) {
      var element_0 = tmp0_iterator_0.g();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.hc();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.ji();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.ej_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).tb = function () {
    return this.ej_1;
  };
  protoOf(StringSerializer).fj = function (encoder, value) {
    return encoder.ue(value);
  };
  protoOf(StringSerializer).ub = function (encoder, value) {
    return this.fj(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).vb = function (decoder) {
    return decoder.xd();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.gj_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).tb = function () {
    return this.gj_1;
  };
  protoOf(DoubleSerializer).hj = function (encoder, value) {
    return encoder.te(value);
  };
  protoOf(DoubleSerializer).ub = function (encoder, value) {
    return this.hj(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).vb = function (decoder) {
    return decoder.wd();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.ij_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).tb = function () {
    return this.ij_1;
  };
  protoOf(IntSerializer).jj = function (encoder, value) {
    return encoder.se(value);
  };
  protoOf(IntSerializer).ub = function (encoder, value) {
    return this.jj(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).vb = function (decoder) {
    return decoder.vd();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.kj_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).tb = function () {
    return this.kj_1;
  };
  protoOf(BooleanSerializer).lj = function (encoder, value) {
    return encoder.re(value);
  };
  protoOf(BooleanSerializer).ub = function (encoder, value) {
    return this.lj(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).vb = function (decoder) {
    return decoder.ud();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.mj_1 = serialName;
    this.nj_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).gc = function () {
    return this.mj_1;
  };
  protoOf(PrimitiveSerialDescriptor).hc = function () {
    return this.nj_1;
  };
  protoOf(PrimitiveSerialDescriptor).jc = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).lc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).mc = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).pc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).oc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).nc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.mj_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.mj_1 === other.mj_1 && equals(this.nj_1, other.nj_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.mj_1) + imul(31, this.nj_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).qj = function (_this__u8e3s4, index) {
    return this.sj(this.rj(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).sj = function (nestedName) {
    var tmp0_elvis_lhs = this.vj();
    return this.wj(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).rj = function (descriptor, index) {
    return descriptor.lc(index);
  };
  protoOf(NamedValueDecoder).wj = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.ek(tag);
    var r = block();
    if (!$this.uj_1) {
      $this.fk();
    }
    $this.uj_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.zd($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var this_0 = this$0;
      var isNullabilitySupported = $deserializer.tb().ac();
      var tmp;
      if (isNullabilitySupported || this_0.sd()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.zd($deserializer, $previousValue);
      } else {
        tmp = this_0.td();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.tj_1 = ArrayList_init_$Create$();
    this.uj_1 = false;
  }
  protoOf(TaggedDecoder).ke = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).xj = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).yj = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).zj = function (tag) {
    var tmp = this.xj(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ak = function (tag) {
    var tmp = this.xj(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).bk = function (tag) {
    var tmp = this.xj(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ck = function (tag) {
    var tmp = this.xj(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).dk = function (tag, enumDescriptor) {
    var tmp = this.xj(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).zd = function (deserializer, previousValue) {
    return this.ae(deserializer);
  };
  protoOf(TaggedDecoder).sd = function () {
    var tmp0_elvis_lhs = this.vj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.yj(currentTag);
  };
  protoOf(TaggedDecoder).td = function () {
    return null;
  };
  protoOf(TaggedDecoder).ud = function () {
    return this.zj(this.fk());
  };
  protoOf(TaggedDecoder).vd = function () {
    return this.ak(this.fk());
  };
  protoOf(TaggedDecoder).wd = function () {
    return this.bk(this.fk());
  };
  protoOf(TaggedDecoder).xd = function () {
    return this.ck(this.fk());
  };
  protoOf(TaggedDecoder).yd = function (enumDescriptor) {
    return this.dk(this.fk(), enumDescriptor);
  };
  protoOf(TaggedDecoder).be = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).ce = function (descriptor) {
  };
  protoOf(TaggedDecoder).de = function (descriptor, index) {
    return this.zj(this.qj(descriptor, index));
  };
  protoOf(TaggedDecoder).ee = function (descriptor, index) {
    return this.ak(this.qj(descriptor, index));
  };
  protoOf(TaggedDecoder).fe = function (descriptor, index) {
    return this.bk(this.qj(descriptor, index));
  };
  protoOf(TaggedDecoder).ge = function (descriptor, index) {
    return this.ck(this.qj(descriptor, index));
  };
  protoOf(TaggedDecoder).he = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.qj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).je = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.qj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).vj = function () {
    return lastOrNull(this.tj_1);
  };
  protoOf(TaggedDecoder).ek = function (name) {
    this.tj_1.m(name);
  };
  protoOf(TaggedDecoder).fk = function () {
    var r = this.tj_1.j3(get_lastIndex_0(this.tj_1));
    this.uj_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).bc = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.gk(kClass, typeArgumentsSerializers) : $super.gk.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.ik_1 = class2ContextualFactory;
    this.jk_1 = polyBase2Serializers;
    this.kk_1 = polyBase2DefaultSerializerProvider;
    this.lk_1 = polyBase2NamedSerializers;
    this.mk_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).if = function (baseClass, value) {
    if (!baseClass.j7(value))
      return null;
    var tmp0_safe_receiver = this.jk_1.h1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.kk_1.h1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).hf = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.lk_1.h1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).h1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.mk_1.h1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).gk = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.ik_1.h1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nk(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).hk = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.ik_1.j1().e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.e1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.f1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.qk_1;
        collector.rk(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.pk(kclass, serial.ok_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.jk_1.j1().e();
    while (tmp0_iterator_0.f()) {
      var element_0 = tmp0_iterator_0.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.e1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.f1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.j1().e();
      while (tmp0_iterator_1.f()) {
        var element_1 = tmp0_iterator_1.g();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.e1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.f1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.sk(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.kk_1.j1().e();
    while (tmp0_iterator_2.f()) {
      var element_2 = tmp0_iterator_2.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.e1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.f1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.tk(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.mk_1.j1().e();
    while (tmp0_iterator_3.f()) {
      var element_3 = tmp0_iterator_3.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.e1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.f1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.uk(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith() {
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).ac = get_isNullable;
  protoOf(SerialDescriptorImpl).ic = get_isInline;
  protoOf(AbstractDecoder).ie = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ae = decodeSerializableValue;
  protoOf(AbstractDecoder).le = decodeSequentially;
  protoOf(AbstractDecoder).ne = decodeCollectionSize;
  protoOf(AbstractEncoder).ef = encodeNotNullMark;
  protoOf(AbstractEncoder).ff = beginCollection;
  protoOf(AbstractEncoder).bf = encodeSerializableValue;
  protoOf(AbstractEncoder).df = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).gf = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ac = get_isNullable;
  protoOf(ListLikeDescriptor).ic = get_isInline;
  protoOf(ListLikeDescriptor).kc = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ac = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).ic = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).aj = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).ac = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).ic = get_isInline;
  protoOf(PrimitiveSerialDescriptor).kc = get_annotations;
  protoOf(TaggedDecoder).ie = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ae = decodeSerializableValue;
  protoOf(TaggedDecoder).le = decodeSequentially;
  protoOf(TaggedDecoder).ne = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = CONTEXTUAL_getInstance;
  _.$_$.e = ENUM_getInstance;
  _.$_$.f = CLASS_getInstance;
  _.$_$.g = LIST_getInstance;
  _.$_$.h = MAP_getInstance;
  _.$_$.i = OBJECT_getInstance;
  _.$_$.j = BooleanSerializer_getInstance;
  _.$_$.k = DoubleSerializer_getInstance;
  _.$_$.l = IntSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = get_nullable;
  _.$_$.o = serializer;
  _.$_$.p = PolymorphicKind;
  _.$_$.q = PrimitiveKind;
  _.$_$.r = SerialDescriptor;
  _.$_$.s = ENUM;
  _.$_$.t = buildSerialDescriptor;
  _.$_$.u = getContextualDescriptor;
  _.$_$.v = AbstractDecoder;
  _.$_$.w = AbstractEncoder;
  _.$_$.x = CompositeDecoder;
  _.$_$.y = CompositeEncoder;
  _.$_$.z = Decoder;
  _.$_$.a1 = Encoder;
  _.$_$.b1 = AbstractPolymorphicSerializer;
  _.$_$.c1 = ArrayListSerializer;
  _.$_$.d1 = ElementMarker;
  _.$_$.e1 = typeParametersSerializers;
  _.$_$.f1 = GeneratedSerializer;
  _.$_$.g1 = InlinePrimitiveDescriptor;
  _.$_$.h1 = NamedValueDecoder;
  _.$_$.i1 = PluginGeneratedSerialDescriptor;
  _.$_$.j1 = ReferenceArraySerializer;
  _.$_$.k1 = createSimpleEnumSerializer;
  _.$_$.l1 = jsonCachedSerialNames;
  _.$_$.m1 = throwMissingFieldException;
  _.$_$.n1 = EmptySerializersModule_0;
  _.$_$.o1 = contextual;
  _.$_$.p1 = SerializersModuleCollector;
  _.$_$.q1 = DeserializationStrategy;
  _.$_$.r1 = KSerializer;
  _.$_$.s1 = MissingFieldException;
  _.$_$.t1 = SealedClassSerializer;
  _.$_$.u1 = SerializationException;
  _.$_$.v1 = SerializationStrategy;
  _.$_$.w1 = findPolymorphicSerializer_0;
  _.$_$.x1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
