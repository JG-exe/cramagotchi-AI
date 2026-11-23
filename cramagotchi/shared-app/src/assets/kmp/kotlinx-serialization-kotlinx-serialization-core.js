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
  var protoOf = kotlin_kotlin.$_$.x3;
  var initMetadataForInterface = kotlin_kotlin.$_$.l3;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.i3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.o;
  var objectCreate = kotlin_kotlin.$_$.w3;
  var captureStack = kotlin_kotlin.$_$.u2;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.p;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException = kotlin_kotlin.$_$.b5;
  var toString = kotlin_kotlin.$_$.z3;
  var THROW_CCE = kotlin_kotlin.$_$.d5;
  var isInterface = kotlin_kotlin.$_$.q3;
  var emptyList = kotlin_kotlin.$_$.o1;
  var isBlank = kotlin_kotlin.$_$.m4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var equals = kotlin_kotlin.$_$.b3;
  var toList = kotlin_kotlin.$_$.m2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var toHashSet = kotlin_kotlin.$_$.k2;
  var copyToArray = kotlin_kotlin.$_$.n1;
  var toBooleanArray = kotlin_kotlin.$_$.j2;
  var withIndex = kotlin_kotlin.$_$.o2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.p5;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var toMap = kotlin_kotlin.$_$.n2;
  var lazy = kotlin_kotlin.$_$.l5;
  var contentEquals = kotlin_kotlin.$_$.i1;
  var until = kotlin_kotlin.$_$.g4;
  var joinToString = kotlin_kotlin.$_$.v1;
  var KProperty1 = kotlin_kotlin.$_$.i4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f3;
  var initMetadataForObject = kotlin_kotlin.$_$.n3;
  var ensureNotNull = kotlin_kotlin.$_$.h5;
  var getStringHashCode = kotlin_kotlin.$_$.g3;
  var toIntOrNull = kotlin_kotlin.$_$.u4;
  var hashCode = kotlin_kotlin.$_$.h3;
  var ArrayList = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.g;
  var KtList = kotlin_kotlin.$_$.e1;
  var isArray = kotlin_kotlin.$_$.o3;
  var arrayIterator = kotlin_kotlin.$_$.s2;
  var asList = kotlin_kotlin.$_$.g1;
  var Collection = kotlin_kotlin.$_$.c1;
  var longArray = kotlin_kotlin.$_$.r3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j3;
  var get_lastIndex = kotlin_kotlin.$_$.w1;
  var Long = kotlin_kotlin.$_$.c5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.g5;
  var indexOf = kotlin_kotlin.$_$.s1;
  var contentToString = kotlin_kotlin.$_$.k1;
  var Enum = kotlin_kotlin.$_$.z4;
  var fillArrayVal = kotlin_kotlin.$_$.c3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var booleanArray = kotlin_kotlin.$_$.t2;
  var emptyMap = kotlin_kotlin.$_$.p1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy_0 = kotlin_kotlin.$_$.k5;
  var contentHashCode = kotlin_kotlin.$_$.j1;
  var charSequenceLength = kotlin_kotlin.$_$.y2;
  var lastOrNull = kotlin_kotlin.$_$.y1;
  var get_lastIndex_0 = kotlin_kotlin.$_$.x1;
  var KtMap = kotlin_kotlin.$_$.f1;
  var KClass = kotlin_kotlin.$_$.h4;
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
    return deserializer.ub(this);
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
    return $super === VOID ? this.ge(descriptor, index, deserializer, previousValue) : $super.ge.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.ae(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.tb(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.sb().zb();
    if (isNullabilitySupported) {
      return this.af(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.pe();
    } else {
      this.df();
      this.af(serializer, value);
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
    return this.ok(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.vb(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.wb());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.xb(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.wb());
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
    this.yb_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.sb().zb()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.ac(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.sb();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ec_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.bc_1);
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
    this.qc_1 = $this_elementDescriptors;
    this.pc_1 = $this_elementDescriptors.ic();
  }
  protoOf(elementDescriptors$1).f = function () {
    return this.pc_1 > 0;
  };
  protoOf(elementDescriptors$1).g = function () {
    var tmp = this.qc_1.ic();
    var tmp1 = this.pc_1;
    this.pc_1 = tmp1 - 1 | 0;
    return this.qc_1.nc(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.rc_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).e = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.rc_1);
  };
  function elementNames$1($this_elementNames) {
    this.tc_1 = $this_elementNames;
    this.sc_1 = $this_elementNames.ic();
  }
  protoOf(elementNames$1).f = function () {
    return this.sc_1 > 0;
  };
  protoOf(elementNames$1).g = function () {
    var tmp = this.tc_1.ic();
    var tmp1 = this.sc_1;
    this.sc_1 = tmp1 - 1 | 0;
    return this.tc_1.kc(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.uc_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).e = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.uc_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.yc_1.h(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.vc_1 = serialName;
    this.wc_1 = false;
    this.xc_1 = emptyList();
    this.yc_1 = ArrayList_init_$Create$();
    this.zc_1 = HashSet_init_$Create$();
    this.ad_1 = ArrayList_init_$Create$();
    this.bd_1 = ArrayList_init_$Create$();
    this.cd_1 = ArrayList_init_$Create$();
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.od_1;
    _hashCode$factory();
    return this_0.f1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.nd_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.kc(it) + ': ' + this$0.nc(it).fc();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.dd_1 = serialName;
    this.ed_1 = kind;
    this.fd_1 = elementsCount;
    this.gd_1 = builder.xc_1;
    this.hd_1 = toHashSet(builder.yc_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.yc_1;
    tmp.id_1 = copyToArray(this_0);
    this.jd_1 = compactArray(builder.ad_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.bd_1;
    tmp_0.kd_1 = copyToArray(this_1);
    this.ld_1 = toBooleanArray(builder.cd_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.id_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.e();
    while (tmp0_iterator.f()) {
      var item = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.o9_1, item.n9_1);
      destination.m(tmp$ret$2);
    }
    tmp_1.md_1 = toMap(destination);
    this.nd_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.od_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).fc = function () {
    return this.dd_1;
  };
  protoOf(SerialDescriptorImpl).gc = function () {
    return this.ed_1;
  };
  protoOf(SerialDescriptorImpl).ic = function () {
    return this.fd_1;
  };
  protoOf(SerialDescriptorImpl).jc = function () {
    return this.gd_1;
  };
  protoOf(SerialDescriptorImpl).pd = function () {
    return this.hd_1;
  };
  protoOf(SerialDescriptorImpl).kc = function (index) {
    return getChecked(this.id_1, index);
  };
  protoOf(SerialDescriptorImpl).lc = function (name) {
    var tmp0_elvis_lhs = this.md_1.h1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).mc = function (index) {
    return getChecked(this.kd_1, index);
  };
  protoOf(SerialDescriptorImpl).nc = function (index) {
    return getChecked(this.jd_1, index);
  };
  protoOf(SerialDescriptorImpl).oc = function (index) {
    return getChecked_0(this.ld_1, index);
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
      if (!(this.fc() === other.fc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.nd_1, other.nd_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ic() === other.ic())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ic();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nc(index).fc() === other.nc(index).fc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nc(index).gc(), other.nc(index).gc())) {
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
    var tmp = until(0, this.fd_1);
    var tmp_0 = this.dd_1 + '(';
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
    return ensureNotNull(getKClassFromExpression(this).h7());
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
  protoOf(AbstractDecoder).qd = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).rd = function () {
    return true;
  };
  protoOf(AbstractDecoder).sd = function () {
    return null;
  };
  protoOf(AbstractDecoder).td = function () {
    var tmp = this.qd();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ud = function () {
    var tmp = this.qd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vd = function () {
    var tmp = this.qd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wd = function () {
    var tmp = this.qd();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xd = function (enumDescriptor) {
    var tmp = this.qd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yd = function (deserializer, previousValue) {
    return this.zd(deserializer);
  };
  protoOf(AbstractDecoder).ae = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).be = function (descriptor) {
  };
  protoOf(AbstractDecoder).ce = function (descriptor, index) {
    return this.td();
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
  protoOf(AbstractDecoder).ge = function (descriptor, index, deserializer, previousValue) {
    return this.yd(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ie = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.sb().zb();
    var tmp;
    if (isNullabilitySupported || this.rd()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.yd(deserializer, previousValue);
    } else {
      tmp = this.sd();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).ae = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).be = function (descriptor) {
  };
  protoOf(AbstractEncoder).ne = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).oe = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).pe = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).qe = function (value) {
    return this.oe(value);
  };
  protoOf(AbstractEncoder).re = function (value) {
    return this.oe(value);
  };
  protoOf(AbstractEncoder).se = function (value) {
    return this.oe(value);
  };
  protoOf(AbstractEncoder).te = function (value) {
    return this.oe(value);
  };
  protoOf(AbstractEncoder).ue = function (enumDescriptor, index) {
    return this.oe(index);
  };
  protoOf(AbstractEncoder).ve = function (descriptor, index, value) {
    if (this.ne(descriptor, index)) {
      this.qe(value);
    }
  };
  protoOf(AbstractEncoder).we = function (descriptor, index, value) {
    if (this.ne(descriptor, index)) {
      this.re(value);
    }
  };
  protoOf(AbstractEncoder).xe = function (descriptor, index, value) {
    if (this.ne(descriptor, index)) {
      this.se(value);
    }
  };
  protoOf(AbstractEncoder).ye = function (descriptor, index, value) {
    if (this.ne(descriptor, index)) {
      this.te(value);
    }
  };
  protoOf(AbstractEncoder).ze = function (descriptor, index, serializer, value) {
    if (this.ne(descriptor, index)) {
      this.af(serializer, value);
    }
  };
  protoOf(AbstractEncoder).bf = function (descriptor, index, serializer, value) {
    if (this.ne(descriptor, index)) {
      this.cf(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).xb = function (decoder, klassName) {
    return decoder.je().gf(this.wb(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).vb = function (encoder, value) {
    return encoder.je().hf(this.wb(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.h7();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.h7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.h7() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).fc = function () {
    return 'kotlin.collections.ArrayList';
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).fc = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.kf_1 = elementDescriptor;
    this.lf_1 = 1;
  }
  protoOf(ListLikeDescriptor).gc = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ic = function () {
    return this.lf_1;
  };
  protoOf(ListLikeDescriptor).kc = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).lc = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).oc = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).mc = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).nc = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.kf_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.kf_1, other.kf_1) && this.fc() === other.fc())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.kf_1), 31) + getStringHashCode(this.fc()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.fc() + '(' + toString(this.kf_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.pf_1 = new ArrayListClassDesc(element.sb());
  }
  protoOf(ArrayListSerializer).sb = function () {
    return this.pf_1;
  };
  protoOf(ArrayListSerializer).qf = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).rf = function (_this__u8e3s4) {
    return _this__u8e3s4.h();
  };
  protoOf(ArrayListSerializer).sf = function (_this__u8e3s4) {
    return this.rf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).tf = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).uf = function (_this__u8e3s4) {
    return this.tf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).vf = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).wf = function (_this__u8e3s4) {
    return this.vf((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).xf = function (_this__u8e3s4, size) {
    return _this__u8e3s4.y3(size);
  };
  protoOf(ArrayListSerializer).yf = function (_this__u8e3s4, size) {
    return this.xf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).zf = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g3(index, element);
  };
  protoOf(ArrayListSerializer).ag = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.zf(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.lg_1 = kClass;
    this.mg_1 = new ArrayClassDesc(eSerializer.sb());
  }
  protoOf(ReferenceArraySerializer).sb = function () {
    return this.mg_1;
  };
  protoOf(ReferenceArraySerializer).ng = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).og = function (_this__u8e3s4) {
    return this.ng((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pg = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).qg = function (_this__u8e3s4) {
    return this.pg((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).qf = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ReferenceArraySerializer).rg = function (_this__u8e3s4) {
    return _this__u8e3s4.h();
  };
  protoOf(ReferenceArraySerializer).sf = function (_this__u8e3s4) {
    return this.rg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).sg = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.lg_1);
  };
  protoOf(ReferenceArraySerializer).uf = function (_this__u8e3s4) {
    return this.sg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).tg = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).wf = function (_this__u8e3s4) {
    return this.tg((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ug = function (_this__u8e3s4, size) {
    return _this__u8e3s4.y3(size);
  };
  protoOf(ReferenceArraySerializer).yf = function (_this__u8e3s4, size) {
    return this.ug(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).vg = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g3(index, element);
  };
  protoOf(ReferenceArraySerializer).ag = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.vg(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).cg = function (_this__u8e3s4) {
    return _this__u8e3s4.h();
  };
  protoOf(CollectionSerializer).og = function (_this__u8e3s4) {
    return this.cg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).dg = function (_this__u8e3s4) {
    return _this__u8e3s4.e();
  };
  protoOf(CollectionSerializer).qg = function (_this__u8e3s4) {
    return this.dg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.eg_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).fg = function (encoder, value) {
    var size = this.og(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.sb();
    var composite = encoder.ef(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.qg(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ze(this.sb(), index, this.eg_1, iterator.g());
      }
       while (inductionVariable < size);
    composite.be(descriptor);
  };
  protoOf(CollectionLikeSerializer).tb = function (encoder, value) {
    return this.fg(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).gg = function (decoder, builder, startIndex, size) {
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
        this.hg(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).hg = function (decoder, index, builder, checkIndex) {
    this.ag(builder, index, decoder.he(this.sb(), index, this.eg_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.me($this.sb());
    $this.yf(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).jg = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.wf(previous);
    var builder = tmp1_elvis_lhs == null ? this.qf() : tmp1_elvis_lhs;
    var startIndex = this.sf(builder);
    var compositeDecoder = decoder.ae(this.sb());
    if (compositeDecoder.ke()) {
      this.gg(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.le(this.sb());
        if (index === -1)
          break $l$loop;
        this.ig(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.be(this.sb());
    return this.uf(builder);
  };
  protoOf(AbstractCollectionSerializer).ub = function (decoder) {
    return this.jg(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).ig = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.hg(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.hg.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.wg_1 = longArray(0);
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
    $this.ah_1[slot] = $this.ah_1[slot].b2((new Long(1, 0)).a2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.ah_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.ah_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.z1());
          slotMarks = slotMarks.b2((new Long(1, 0)).a2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.yg_1($this.xg_1, index)) {
            $this.ah_1[slot] = slotMarks;
            return index;
          }
        }
        $this.ah_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.xg_1 = descriptor;
    this.yg_1 = readIfAbsent;
    var elementsCount = this.xg_1.ic();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).a2(elementsCount);
      }
      tmp.zg_1 = tmp_0;
      this.ah_1 = Companion_getInstance().wg_1;
    } else {
      this.zg_1 = new Long(0, 0);
      this.ah_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).bh = function (index) {
    if (index < 64) {
      this.zg_1 = this.zg_1.b2((new Long(1, 0)).a2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ch = function () {
    var elementsCount = this.xg_1.ic();
    while (!this.zg_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.zg_1.z1());
      this.zg_1 = this.zg_1.b2((new Long(1, 0)).a2(index));
      if (this.yg_1(this.xg_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.dh_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.dh_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.sh(element.k1_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.eh_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.dh_1 = values;
    this.eh_1 = null;
    var tmp = this;
    tmp.fh_1 = lazy(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).sb = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fh_1;
    descriptor$factory();
    return this_0.f1();
  };
  protoOf(EnumSerializer).th = function (encoder, value) {
    var index = indexOf(this.dh_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.sb().fc() + ', ' + ('must be one of ' + contentToString(this.dh_1)));
    }
    encoder.ue(this.sb(), index);
  };
  protoOf(EnumSerializer).tb = function (encoder, value) {
    return this.th(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).ub = function (decoder) {
    var index = decoder.xd(this.sb());
    if (!(0 <= index ? index <= (this.dh_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.sb().fc() + ' enum values, ' + ('values size is ' + this.dh_1.length));
    }
    return this.dh_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.sb().fc() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.hi_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.kc(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.gi_1 = ENUM_getInstance();
    var tmp = this;
    tmp.hi_1 = lazy(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).gc = function () {
    return this.gi_1;
  };
  protoOf(EnumDescriptor).nc = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.gc() === ENUM_getInstance()))
      return false;
    if (!(this.fc() === other.fc()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.fc() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.fc());
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
      return receiver.sb();
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
    this.wi_1 = true;
  }
  protoOf(InlineClassDescriptor).hc = function () {
    return this.wi_1;
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
      if (!(this.fc() === other.fc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.wi_1 && contentEquals(this.ii(), other.ii()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ic() === other.ic())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ic();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nc(index).fc() === other.nc(index).fc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nc(index).gc(), other.nc(index).gc())) {
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
    this.xi_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).yi = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.xi_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).sb = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).tb = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ub = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.aj_1 = serializer;
    this.bj_1 = new SerialDescriptorForNullable(this.aj_1.sb());
  }
  protoOf(NullableSerializer).sb = function () {
    return this.bj_1;
  };
  protoOf(NullableSerializer).cj = function (encoder, value) {
    if (!(value == null)) {
      encoder.df();
      encoder.af(this.aj_1, value);
    } else {
      encoder.pe();
    }
  };
  protoOf(NullableSerializer).tb = function (encoder, value) {
    return this.cj(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).ub = function (decoder) {
    return decoder.rd() ? decoder.zd(this.aj_1) : decoder.sd();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.aj_1, other.aj_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.aj_1);
  };
  function SerialDescriptorForNullable(original) {
    this.bc_1 = original;
    this.cc_1 = this.bc_1.fc() + '?';
    this.dc_1 = cachedSerialNames(this.bc_1);
  }
  protoOf(SerialDescriptorForNullable).jc = function () {
    return this.bc_1.jc();
  };
  protoOf(SerialDescriptorForNullable).ic = function () {
    return this.bc_1.ic();
  };
  protoOf(SerialDescriptorForNullable).hc = function () {
    return this.bc_1.hc();
  };
  protoOf(SerialDescriptorForNullable).gc = function () {
    return this.bc_1.gc();
  };
  protoOf(SerialDescriptorForNullable).mc = function (index) {
    return this.bc_1.mc(index);
  };
  protoOf(SerialDescriptorForNullable).nc = function (index) {
    return this.bc_1.nc(index);
  };
  protoOf(SerialDescriptorForNullable).lc = function (name) {
    return this.bc_1.lc(name);
  };
  protoOf(SerialDescriptorForNullable).kc = function (index) {
    return this.bc_1.kc(index);
  };
  protoOf(SerialDescriptorForNullable).oc = function (index) {
    return this.bc_1.oc(index);
  };
  protoOf(SerialDescriptorForNullable).fc = function () {
    return this.cc_1;
  };
  protoOf(SerialDescriptorForNullable).pd = function () {
    return this.dc_1;
  };
  protoOf(SerialDescriptorForNullable).zb = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.bc_1, other.bc_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.bc_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.bc_1), 31);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.pd();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.ic());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ic();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.kc(i);
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
          var element = descriptor.kc(i);
          missingFields.m(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.fc());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ph_1;
    childSerializers$factory();
    return this_0.f1();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.rh_1;
    _hashCode$factory_0();
    return this_0.f1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.kh_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.kh_1[i];
        indices.r3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.hh_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yi();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.hh_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zi();
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
          var tmp$ret$0 = item.sb();
          destination.m(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ii());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.kc(i) + ': ' + this$0.nc(i).fc();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.gh_1 = serialName;
    this.hh_1 = generatedSerializer;
    this.ih_1 = elementsCount;
    this.jh_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ih_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.kh_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ih_1;
    tmp_3.lh_1 = fillArrayVal(Array(size), null);
    this.mh_1 = null;
    this.nh_1 = booleanArray(this.ih_1);
    this.oh_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.ph_1 = lazy_0(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.qh_1 = lazy_0(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.rh_1 = lazy_0(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).fc = function () {
    return this.gh_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ic = function () {
    return this.ih_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).gc = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).jc = function () {
    var tmp0_elvis_lhs = this.mh_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).pd = function () {
    return this.oh_1.i1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ii = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.qh_1;
    typeParameterDescriptors$factory();
    return this_0.f1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ji = function (name, isOptional) {
    this.jh_1 = this.jh_1 + 1 | 0;
    this.kh_1[this.jh_1] = name;
    this.nh_1[this.jh_1] = isOptional;
    this.lh_1[this.jh_1] = null;
    if (this.jh_1 === (this.ih_1 - 1 | 0)) {
      this.oh_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).sh = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ji(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ji.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).nc = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).sb();
  };
  protoOf(PluginGeneratedSerialDescriptor).oc = function (index) {
    return getChecked_0(this.nh_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).mc = function (index) {
    var tmp0_elvis_lhs = getChecked(this.lh_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).kc = function (index) {
    return getChecked(this.kh_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).lc = function (name) {
    var tmp0_elvis_lhs = this.oh_1.h1(name);
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
      if (!(this.fc() === other.fc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.ii(), other.ii())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ic() === other.ic())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ic();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nc(index).fc() === other.nc(index).fc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nc(index).gc(), other.nc(index).gc())) {
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
    var tmp = until(0, this.ih_1);
    var tmp_0 = this.fc() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.fc());
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
      var tmp0_safe_receiver = element.fc();
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
      var tmp0_safe_receiver_0 = element_0.gc();
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
      return receiver.ii();
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
    this.dj_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).sb = function () {
    return this.dj_1;
  };
  protoOf(StringSerializer).ej = function (encoder, value) {
    return encoder.te(value);
  };
  protoOf(StringSerializer).tb = function (encoder, value) {
    return this.ej(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ub = function (decoder) {
    return decoder.wd();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.fj_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).sb = function () {
    return this.fj_1;
  };
  protoOf(DoubleSerializer).gj = function (encoder, value) {
    return encoder.se(value);
  };
  protoOf(DoubleSerializer).tb = function (encoder, value) {
    return this.gj(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ub = function (decoder) {
    return decoder.vd();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.hj_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).sb = function () {
    return this.hj_1;
  };
  protoOf(IntSerializer).ij = function (encoder, value) {
    return encoder.re(value);
  };
  protoOf(IntSerializer).tb = function (encoder, value) {
    return this.ij(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ub = function (decoder) {
    return decoder.ud();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.jj_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).sb = function () {
    return this.jj_1;
  };
  protoOf(BooleanSerializer).kj = function (encoder, value) {
    return encoder.qe(value);
  };
  protoOf(BooleanSerializer).tb = function (encoder, value) {
    return this.kj(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ub = function (decoder) {
    return decoder.td();
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
    this.lj_1 = serialName;
    this.mj_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).fc = function () {
    return this.lj_1;
  };
  protoOf(PrimitiveSerialDescriptor).gc = function () {
    return this.mj_1;
  };
  protoOf(PrimitiveSerialDescriptor).ic = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).kc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).lc = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).oc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).nc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).mc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.lj_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.lj_1 === other.lj_1 && equals(this.mj_1, other.mj_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.lj_1) + imul(31, this.mj_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).pj = function (_this__u8e3s4, index) {
    return this.rj(this.qj(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).rj = function (nestedName) {
    var tmp0_elvis_lhs = this.uj();
    return this.vj(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).qj = function (descriptor, index) {
    return descriptor.kc(index);
  };
  protoOf(NamedValueDecoder).vj = function (parentName, childName) {
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
    $this.dk(tag);
    var r = block();
    if (!$this.tj_1) {
      $this.ek();
    }
    $this.tj_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.yd($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var this_0 = this$0;
      var isNullabilitySupported = $deserializer.sb().zb();
      var tmp;
      if (isNullabilitySupported || this_0.rd()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.yd($deserializer, $previousValue);
      } else {
        tmp = this_0.sd();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.sj_1 = ArrayList_init_$Create$();
    this.tj_1 = false;
  }
  protoOf(TaggedDecoder).je = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).wj = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).xj = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).yj = function (tag) {
    var tmp = this.wj(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).zj = function (tag) {
    var tmp = this.wj(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ak = function (tag) {
    var tmp = this.wj(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).bk = function (tag) {
    var tmp = this.wj(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ck = function (tag, enumDescriptor) {
    var tmp = this.wj(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).yd = function (deserializer, previousValue) {
    return this.zd(deserializer);
  };
  protoOf(TaggedDecoder).rd = function () {
    var tmp0_elvis_lhs = this.uj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.xj(currentTag);
  };
  protoOf(TaggedDecoder).sd = function () {
    return null;
  };
  protoOf(TaggedDecoder).td = function () {
    return this.yj(this.ek());
  };
  protoOf(TaggedDecoder).ud = function () {
    return this.zj(this.ek());
  };
  protoOf(TaggedDecoder).vd = function () {
    return this.ak(this.ek());
  };
  protoOf(TaggedDecoder).wd = function () {
    return this.bk(this.ek());
  };
  protoOf(TaggedDecoder).xd = function (enumDescriptor) {
    return this.ck(this.ek(), enumDescriptor);
  };
  protoOf(TaggedDecoder).ae = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).be = function (descriptor) {
  };
  protoOf(TaggedDecoder).ce = function (descriptor, index) {
    return this.yj(this.pj(descriptor, index));
  };
  protoOf(TaggedDecoder).de = function (descriptor, index) {
    return this.zj(this.pj(descriptor, index));
  };
  protoOf(TaggedDecoder).ee = function (descriptor, index) {
    return this.ak(this.pj(descriptor, index));
  };
  protoOf(TaggedDecoder).fe = function (descriptor, index) {
    return this.bk(this.pj(descriptor, index));
  };
  protoOf(TaggedDecoder).ge = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.pj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ie = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.pj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).uj = function () {
    return lastOrNull(this.sj_1);
  };
  protoOf(TaggedDecoder).dk = function (name) {
    this.sj_1.m(name);
  };
  protoOf(TaggedDecoder).ek = function () {
    var r = this.sj_1.j3(get_lastIndex_0(this.sj_1));
    this.tj_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).ac = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.fk(kClass, typeArgumentsSerializers) : $super.fk.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.hk_1 = class2ContextualFactory;
    this.ik_1 = polyBase2Serializers;
    this.jk_1 = polyBase2DefaultSerializerProvider;
    this.kk_1 = polyBase2NamedSerializers;
    this.lk_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).hf = function (baseClass, value) {
    if (!baseClass.i7(value))
      return null;
    var tmp0_safe_receiver = this.ik_1.h1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.jk_1.h1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).gf = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.kk_1.h1(baseClass);
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
    var tmp_1 = this.lk_1.h1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).fk = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.hk_1.h1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mk(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).gk = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.hk_1.j1().e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.e1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.f1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.pk_1;
        collector.qk(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.ok(kclass, serial.nk_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.ik_1.j1().e();
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
        collector.rk(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.jk_1.j1().e();
    while (tmp0_iterator_2.f()) {
      var element_2 = tmp0_iterator_2.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.e1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.f1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.sk(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.lk_1.j1().e();
    while (tmp0_iterator_3.f()) {
      var element_3 = tmp0_iterator_3.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.e1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.f1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.tk(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(SerialDescriptorImpl).zb = get_isNullable;
  protoOf(SerialDescriptorImpl).hc = get_isInline;
  protoOf(AbstractDecoder).he = decodeSerializableElement$default;
  protoOf(AbstractDecoder).zd = decodeSerializableValue;
  protoOf(AbstractDecoder).ke = decodeSequentially;
  protoOf(AbstractDecoder).me = decodeCollectionSize;
  protoOf(AbstractEncoder).df = encodeNotNullMark;
  protoOf(AbstractEncoder).ef = beginCollection;
  protoOf(AbstractEncoder).af = encodeSerializableValue;
  protoOf(AbstractEncoder).cf = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ff = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).zb = get_isNullable;
  protoOf(ListLikeDescriptor).hc = get_isInline;
  protoOf(ListLikeDescriptor).jc = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).zb = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).hc = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).zi = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).zb = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).hc = get_isInline;
  protoOf(PrimitiveSerialDescriptor).jc = get_annotations;
  protoOf(TaggedDecoder).he = decodeSerializableElement$default;
  protoOf(TaggedDecoder).zd = decodeSerializableValue;
  protoOf(TaggedDecoder).ke = decodeSequentially;
  protoOf(TaggedDecoder).me = decodeCollectionSize;
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
