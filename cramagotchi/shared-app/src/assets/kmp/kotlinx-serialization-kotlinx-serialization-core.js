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
  var protoOf = kotlin_kotlin.$_$.p3;
  var initMetadataForInterface = kotlin_kotlin.$_$.e3;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.b3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.o;
  var objectCreate = kotlin_kotlin.$_$.o3;
  var captureStack = kotlin_kotlin.$_$.n2;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.p;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException = kotlin_kotlin.$_$.q4;
  var toString = kotlin_kotlin.$_$.r3;
  var THROW_CCE = kotlin_kotlin.$_$.s4;
  var isInterface = kotlin_kotlin.$_$.i3;
  var emptyList = kotlin_kotlin.$_$.m1;
  var isBlank = kotlin_kotlin.$_$.c4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var equals = kotlin_kotlin.$_$.u2;
  var toList = kotlin_kotlin.$_$.f2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var toHashSet = kotlin_kotlin.$_$.d2;
  var copyToArray = kotlin_kotlin.$_$.l1;
  var toBooleanArray = kotlin_kotlin.$_$.c2;
  var withIndex = kotlin_kotlin.$_$.h2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.e5;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var toMap = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.a5;
  var contentEquals = kotlin_kotlin.$_$.g1;
  var until = kotlin_kotlin.$_$.w3;
  var joinToString = kotlin_kotlin.$_$.t1;
  var KProperty1 = kotlin_kotlin.$_$.y3;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y2;
  var initMetadataForObject = kotlin_kotlin.$_$.g3;
  var ensureNotNull = kotlin_kotlin.$_$.w4;
  var getStringHashCode = kotlin_kotlin.$_$.z2;
  var toIntOrNull = kotlin_kotlin.$_$.k4;
  var hashCode = kotlin_kotlin.$_$.a3;
  var isArray = kotlin_kotlin.$_$.h3;
  var arrayIterator = kotlin_kotlin.$_$.l2;
  var ArrayList = kotlin_kotlin.$_$.b1;
  var asList = kotlin_kotlin.$_$.e1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.g;
  var longArray = kotlin_kotlin.$_$.j3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c3;
  var get_lastIndex = kotlin_kotlin.$_$.u1;
  var Long = kotlin_kotlin.$_$.r4;
  var countTrailingZeroBits = kotlin_kotlin.$_$.v4;
  var indexOf = kotlin_kotlin.$_$.q1;
  var contentToString = kotlin_kotlin.$_$.i1;
  var Enum = kotlin_kotlin.$_$.o4;
  var fillArrayVal = kotlin_kotlin.$_$.v2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var booleanArray = kotlin_kotlin.$_$.m2;
  var emptyMap = kotlin_kotlin.$_$.n1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy_0 = kotlin_kotlin.$_$.z4;
  var contentHashCode = kotlin_kotlin.$_$.h1;
  var charSequenceLength = kotlin_kotlin.$_$.r2;
  var lastOrNull = kotlin_kotlin.$_$.w1;
  var get_lastIndex_0 = kotlin_kotlin.$_$.v1;
  var KtMap = kotlin_kotlin.$_$.d1;
  var KClass = kotlin_kotlin.$_$.x3;
  var get_indices = kotlin_kotlin.$_$.s1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t;
  var get_indices_0 = kotlin_kotlin.$_$.r1;
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
    return deserializer.ta(this);
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
    return $super === VOID ? this.fd(descriptor, index, deserializer, previousValue) : $super.fd.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.zc(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.sa(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.ra().ya();
    if (isNullabilitySupported) {
      return this.zd(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.od();
    } else {
      this.ce();
      this.zd(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
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
    return this.bj(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.ua(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.va());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.wa(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.va());
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
    MissingFieldException.call($this, missingFields, missingFields.h() === 1 ? "Field '" + missingFields.j(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
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
    this.xa_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.ra().ya()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.za(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ra();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.db_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.ab_1);
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
    this.pb_1 = $this_elementDescriptors;
    this.ob_1 = $this_elementDescriptors.hb();
  }
  protoOf(elementDescriptors$1).f = function () {
    return this.ob_1 > 0;
  };
  protoOf(elementDescriptors$1).g = function () {
    var tmp = this.pb_1.hb();
    var tmp1 = this.ob_1;
    this.ob_1 = tmp1 - 1 | 0;
    return this.pb_1.mb(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.qb_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).e = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.qb_1);
  };
  function elementNames$1($this_elementNames) {
    this.sb_1 = $this_elementNames;
    this.rb_1 = $this_elementNames.hb();
  }
  protoOf(elementNames$1).f = function () {
    return this.rb_1 > 0;
  };
  protoOf(elementNames$1).g = function () {
    var tmp = this.sb_1.hb();
    var tmp1 = this.rb_1;
    this.rb_1 = tmp1 - 1 | 0;
    return this.sb_1.jb(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.tb_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).e = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.tb_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.xb_1.h(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ub_1 = serialName;
    this.vb_1 = false;
    this.wb_1 = emptyList();
    this.xb_1 = ArrayList_init_$Create$();
    this.yb_1 = HashSet_init_$Create$();
    this.zb_1 = ArrayList_init_$Create$();
    this.ac_1 = ArrayList_init_$Create$();
    this.bc_1 = ArrayList_init_$Create$();
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.nc_1;
    _hashCode$factory();
    return this_0.x();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mc_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.jb(it) + ': ' + this$0.mb(it).eb();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.cc_1 = serialName;
    this.dc_1 = kind;
    this.ec_1 = elementsCount;
    this.fc_1 = builder.wb_1;
    this.gc_1 = toHashSet(builder.xb_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.xb_1;
    tmp.hc_1 = copyToArray(this_0);
    this.ic_1 = compactArray(builder.zb_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.ac_1;
    tmp_0.jc_1 = copyToArray(this_1);
    this.kc_1 = toBooleanArray(builder.bc_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.hc_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.e();
    while (tmp0_iterator.f()) {
      var item = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.o8_1, item.n8_1);
      destination.i(tmp$ret$2);
    }
    tmp_1.lc_1 = toMap(destination);
    this.mc_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.nc_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).eb = function () {
    return this.cc_1;
  };
  protoOf(SerialDescriptorImpl).fb = function () {
    return this.dc_1;
  };
  protoOf(SerialDescriptorImpl).hb = function () {
    return this.ec_1;
  };
  protoOf(SerialDescriptorImpl).ib = function () {
    return this.fc_1;
  };
  protoOf(SerialDescriptorImpl).oc = function () {
    return this.gc_1;
  };
  protoOf(SerialDescriptorImpl).jb = function (index) {
    return getChecked(this.hc_1, index);
  };
  protoOf(SerialDescriptorImpl).kb = function (name) {
    var tmp0_elvis_lhs = this.lc_1.z(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).lb = function (index) {
    return getChecked(this.jc_1, index);
  };
  protoOf(SerialDescriptorImpl).mb = function (index) {
    return getChecked(this.ic_1, index);
  };
  protoOf(SerialDescriptorImpl).nb = function (index) {
    return getChecked_0(this.kc_1, index);
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
      if (!(this.eb() === other.eb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.mc_1, other.mc_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hb() === other.hb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.hb();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.mb(index).eb() === other.mb(index).eb())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.mb(index).fb(), other.mb(index).fb())) {
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
    var tmp = until(0, this.ec_1);
    var tmp_0 = this.cc_1 + '(';
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
    return ensureNotNull(getKClassFromExpression(this).q6());
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
  protoOf(AbstractDecoder).pc = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).qc = function () {
    return true;
  };
  protoOf(AbstractDecoder).rc = function () {
    return null;
  };
  protoOf(AbstractDecoder).sc = function () {
    var tmp = this.pc();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tc = function () {
    var tmp = this.pc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).uc = function () {
    var tmp = this.pc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vc = function () {
    var tmp = this.pc();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wc = function (enumDescriptor) {
    var tmp = this.pc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xc = function (deserializer, previousValue) {
    return this.yc(deserializer);
  };
  protoOf(AbstractDecoder).zc = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ad = function (descriptor) {
  };
  protoOf(AbstractDecoder).bd = function (descriptor, index) {
    return this.sc();
  };
  protoOf(AbstractDecoder).cd = function (descriptor, index) {
    return this.tc();
  };
  protoOf(AbstractDecoder).dd = function (descriptor, index) {
    return this.uc();
  };
  protoOf(AbstractDecoder).ed = function (descriptor, index) {
    return this.vc();
  };
  protoOf(AbstractDecoder).fd = function (descriptor, index, deserializer, previousValue) {
    return this.xc(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).hd = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.ra().ya();
    var tmp;
    if (isNullabilitySupported || this.qc()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.xc(deserializer, previousValue);
    } else {
      tmp = this.rc();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).zc = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ad = function (descriptor) {
  };
  protoOf(AbstractEncoder).md = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).nd = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).od = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).pd = function (value) {
    return this.nd(value);
  };
  protoOf(AbstractEncoder).qd = function (value) {
    return this.nd(value);
  };
  protoOf(AbstractEncoder).rd = function (value) {
    return this.nd(value);
  };
  protoOf(AbstractEncoder).sd = function (value) {
    return this.nd(value);
  };
  protoOf(AbstractEncoder).td = function (enumDescriptor, index) {
    return this.nd(index);
  };
  protoOf(AbstractEncoder).ud = function (descriptor, index, value) {
    if (this.md(descriptor, index)) {
      this.pd(value);
    }
  };
  protoOf(AbstractEncoder).vd = function (descriptor, index, value) {
    if (this.md(descriptor, index)) {
      this.qd(value);
    }
  };
  protoOf(AbstractEncoder).wd = function (descriptor, index, value) {
    if (this.md(descriptor, index)) {
      this.rd(value);
    }
  };
  protoOf(AbstractEncoder).xd = function (descriptor, index, value) {
    if (this.md(descriptor, index)) {
      this.sd(value);
    }
  };
  protoOf(AbstractEncoder).yd = function (descriptor, index, serializer, value) {
    if (this.md(descriptor, index)) {
      this.zd(serializer, value);
    }
  };
  protoOf(AbstractEncoder).ae = function (descriptor, index, serializer, value) {
    if (this.md(descriptor, index)) {
      this.be(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).wa = function (decoder, klassName) {
    return decoder.id().fe(this.va(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ua = function (encoder, value) {
    return encoder.id().ge(this.va(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.q6();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.q6() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.q6() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).eb = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.je_1 = elementDescriptor;
    this.ke_1 = 1;
  }
  protoOf(ListLikeDescriptor).fb = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).hb = function () {
    return this.ke_1;
  };
  protoOf(ListLikeDescriptor).jb = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).kb = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).nb = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.eb() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).lb = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.eb() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).mb = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.eb() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.je_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.je_1, other.je_1) && this.eb() === other.eb())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.je_1), 31) + getStringHashCode(this.eb()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.eb() + '(' + toString(this.je_1) + ')';
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.me_1 = kClass;
    this.ne_1 = new ArrayClassDesc(eSerializer.ra());
  }
  protoOf(ReferenceArraySerializer).ra = function () {
    return this.ne_1;
  };
  protoOf(ReferenceArraySerializer).oe = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).pe = function (_this__u8e3s4) {
    return this.oe((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).qe = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).re = function (_this__u8e3s4) {
    return this.qe((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).se = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ReferenceArraySerializer).te = function (_this__u8e3s4) {
    return _this__u8e3s4.h();
  };
  protoOf(ReferenceArraySerializer).ue = function (_this__u8e3s4) {
    return this.te(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ve = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.me_1);
  };
  protoOf(ReferenceArraySerializer).we = function (_this__u8e3s4) {
    return this.ve(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).xe = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).ye = function (_this__u8e3s4) {
    return this.xe((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ze = function (_this__u8e3s4, size) {
    return _this__u8e3s4.h3(size);
  };
  protoOf(ReferenceArraySerializer).af = function (_this__u8e3s4, size) {
    return this.ze(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).bf = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.k2(index, element);
  };
  protoOf(ReferenceArraySerializer).cf = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.bf(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.df_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ef = function (encoder, value) {
    var size = this.pe(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ra();
    var composite = encoder.de(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.re(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.yd(this.ra(), index, this.df_1, iterator.g());
      }
       while (inductionVariable < size);
    composite.ad(descriptor);
  };
  protoOf(CollectionLikeSerializer).sa = function (encoder, value) {
    return this.ef(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).ff = function (decoder, builder, startIndex, size) {
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
        this.gf(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).gf = function (decoder, index, builder, checkIndex) {
    this.cf(builder, index, decoder.gd(this.ra(), index, this.df_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.ld($this.ra());
    $this.af(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).if = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ye(previous);
    var builder = tmp1_elvis_lhs == null ? this.se() : tmp1_elvis_lhs;
    var startIndex = this.ue(builder);
    var compositeDecoder = decoder.zc(this.ra());
    if (compositeDecoder.jd()) {
      this.ff(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.kd(this.ra());
        if (index === -1)
          break $l$loop;
        this.hf(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.ad(this.ra());
    return this.we(builder);
  };
  protoOf(AbstractCollectionSerializer).ta = function (decoder) {
    return this.if(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).hf = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.gf(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.gf.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.jf_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).s1(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.nf_1[slot] = $this.nf_1[slot].t1((new Long(1, 0)).s1(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.nf_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.nf_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.r1());
          slotMarks = slotMarks.t1((new Long(1, 0)).s1(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.lf_1($this.kf_1, index)) {
            $this.nf_1[slot] = slotMarks;
            return index;
          }
        }
        $this.nf_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.kf_1 = descriptor;
    this.lf_1 = readIfAbsent;
    var elementsCount = this.kf_1.hb();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).s1(elementsCount);
      }
      tmp.mf_1 = tmp_0;
      this.nf_1 = Companion_getInstance().jf_1;
    } else {
      this.mf_1 = new Long(0, 0);
      this.nf_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).of = function (index) {
    if (index < 64) {
      this.mf_1 = this.mf_1.t1((new Long(1, 0)).s1(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).pf = function () {
    var elementsCount = this.kf_1.hb();
    while (!this.mf_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.mf_1.r1());
      this.mf_1 = this.mf_1.t1((new Long(1, 0)).s1(index));
      if (this.lf_1(this.kf_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.qf_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.qf_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.fg(element.c1_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.rf_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.qf_1 = values;
    this.rf_1 = null;
    var tmp = this;
    tmp.sf_1 = lazy(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).ra = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.sf_1;
    descriptor$factory();
    return this_0.x();
  };
  protoOf(EnumSerializer).gg = function (encoder, value) {
    var index = indexOf(this.qf_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.ra().eb() + ', ' + ('must be one of ' + contentToString(this.qf_1)));
    }
    encoder.td(this.ra(), index);
  };
  protoOf(EnumSerializer).sa = function (encoder, value) {
    return this.gg(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).ta = function (decoder) {
    var index = decoder.wc(this.ra());
    if (!(0 <= index ? index <= (this.qf_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.ra().eb() + ' enum values, ' + ('values size is ' + this.qf_1.length));
    }
    return this.qf_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.ra().eb() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ug_1;
    elementDescriptors$factory();
    return this_0.x();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.jb(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.tg_1 = ENUM_getInstance();
    var tmp = this;
    tmp.ug_1 = lazy(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).fb = function () {
    return this.tg_1;
  };
  protoOf(EnumDescriptor).mb = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.fb() === ENUM_getInstance()))
      return false;
    if (!(this.eb() === other.eb()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.eb() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.eb());
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
      return receiver.ra();
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
    this.jh_1 = true;
  }
  protoOf(InlineClassDescriptor).gb = function () {
    return this.jh_1;
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
      if (!(this.eb() === other.eb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.jh_1 && contentEquals(this.vg(), other.vg()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hb() === other.hb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.hb();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.mb(index).eb() === other.mb(index).eb())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.mb(index).fb(), other.mb(index).fb())) {
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
    this.kh_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).lh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.kh_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).ra = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).sa = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ta = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.nh_1 = serializer;
    this.oh_1 = new SerialDescriptorForNullable(this.nh_1.ra());
  }
  protoOf(NullableSerializer).ra = function () {
    return this.oh_1;
  };
  protoOf(NullableSerializer).ph = function (encoder, value) {
    if (!(value == null)) {
      encoder.ce();
      encoder.zd(this.nh_1, value);
    } else {
      encoder.od();
    }
  };
  protoOf(NullableSerializer).sa = function (encoder, value) {
    return this.ph(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).ta = function (decoder) {
    return decoder.qc() ? decoder.yc(this.nh_1) : decoder.rc();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.nh_1, other.nh_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.nh_1);
  };
  function SerialDescriptorForNullable(original) {
    this.ab_1 = original;
    this.bb_1 = this.ab_1.eb() + '?';
    this.cb_1 = cachedSerialNames(this.ab_1);
  }
  protoOf(SerialDescriptorForNullable).ib = function () {
    return this.ab_1.ib();
  };
  protoOf(SerialDescriptorForNullable).hb = function () {
    return this.ab_1.hb();
  };
  protoOf(SerialDescriptorForNullable).gb = function () {
    return this.ab_1.gb();
  };
  protoOf(SerialDescriptorForNullable).fb = function () {
    return this.ab_1.fb();
  };
  protoOf(SerialDescriptorForNullable).lb = function (index) {
    return this.ab_1.lb(index);
  };
  protoOf(SerialDescriptorForNullable).mb = function (index) {
    return this.ab_1.mb(index);
  };
  protoOf(SerialDescriptorForNullable).kb = function (name) {
    return this.ab_1.kb(name);
  };
  protoOf(SerialDescriptorForNullable).jb = function (index) {
    return this.ab_1.jb(index);
  };
  protoOf(SerialDescriptorForNullable).nb = function (index) {
    return this.ab_1.nb(index);
  };
  protoOf(SerialDescriptorForNullable).eb = function () {
    return this.bb_1;
  };
  protoOf(SerialDescriptorForNullable).oc = function () {
    return this.cb_1;
  };
  protoOf(SerialDescriptorForNullable).ya = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.ab_1, other.ab_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.ab_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.ab_1), 31);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.oc();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.hb());
    var inductionVariable = 0;
    var last = _this__u8e3s4.hb();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.jb(i);
        result.i(element);
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
    if (!(_this__u8e3s4 == null || _this__u8e3s4.k())) {
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
          var element = descriptor.jb(i);
          missingFields.i(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.eb());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.cg_1;
    childSerializers$factory();
    return this_0.x();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.eg_1;
    _hashCode$factory_0();
    return this_0.x();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.xf_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.xf_1[i];
        indices.v2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.uf_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lh();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.uf_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mh();
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
          var tmp$ret$0 = item.ra();
          destination.i(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.vg());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.jb(i) + ': ' + this$0.mb(i).eb();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.tf_1 = serialName;
    this.uf_1 = generatedSerializer;
    this.vf_1 = elementsCount;
    this.wf_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.vf_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.xf_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.vf_1;
    tmp_3.yf_1 = fillArrayVal(Array(size), null);
    this.zf_1 = null;
    this.ag_1 = booleanArray(this.vf_1);
    this.bg_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.cg_1 = lazy_0(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.dg_1 = lazy_0(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.eg_1 = lazy_0(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).eb = function () {
    return this.tf_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).hb = function () {
    return this.vf_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).fb = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).ib = function () {
    var tmp0_elvis_lhs = this.zf_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).oc = function () {
    return this.bg_1.a1();
  };
  protoOf(PluginGeneratedSerialDescriptor).vg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.dg_1;
    typeParameterDescriptors$factory();
    return this_0.x();
  };
  protoOf(PluginGeneratedSerialDescriptor).wg = function (name, isOptional) {
    this.wf_1 = this.wf_1 + 1 | 0;
    this.xf_1[this.wf_1] = name;
    this.ag_1[this.wf_1] = isOptional;
    this.yf_1[this.wf_1] = null;
    if (this.wf_1 === (this.vf_1 - 1 | 0)) {
      this.bg_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).fg = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.wg(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.wg.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).mb = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).ra();
  };
  protoOf(PluginGeneratedSerialDescriptor).nb = function (index) {
    return getChecked_0(this.ag_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).lb = function (index) {
    var tmp0_elvis_lhs = getChecked(this.yf_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).jb = function (index) {
    return getChecked(this.xf_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).kb = function (name) {
    var tmp0_elvis_lhs = this.bg_1.z(name);
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
      if (!(this.eb() === other.eb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.vg(), other.vg())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hb() === other.hb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.hb();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.mb(index).eb() === other.mb(index).eb())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.mb(index).fb(), other.mb(index).fb())) {
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
    var tmp = until(0, this.vf_1);
    var tmp_0 = this.eb() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.eb());
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
      var tmp0_safe_receiver = element.eb();
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
      var tmp0_safe_receiver_0 = element_0.fb();
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
      return receiver.vg();
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
    this.qh_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).ra = function () {
    return this.qh_1;
  };
  protoOf(StringSerializer).rh = function (encoder, value) {
    return encoder.sd(value);
  };
  protoOf(StringSerializer).sa = function (encoder, value) {
    return this.rh(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ta = function (decoder) {
    return decoder.vc();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.sh_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).ra = function () {
    return this.sh_1;
  };
  protoOf(DoubleSerializer).th = function (encoder, value) {
    return encoder.rd(value);
  };
  protoOf(DoubleSerializer).sa = function (encoder, value) {
    return this.th(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ta = function (decoder) {
    return decoder.uc();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.uh_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).ra = function () {
    return this.uh_1;
  };
  protoOf(IntSerializer).vh = function (encoder, value) {
    return encoder.qd(value);
  };
  protoOf(IntSerializer).sa = function (encoder, value) {
    return this.vh(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ta = function (decoder) {
    return decoder.tc();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.wh_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).ra = function () {
    return this.wh_1;
  };
  protoOf(BooleanSerializer).xh = function (encoder, value) {
    return encoder.pd(value);
  };
  protoOf(BooleanSerializer).sa = function (encoder, value) {
    return this.xh(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ta = function (decoder) {
    return decoder.sc();
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
    this.yh_1 = serialName;
    this.zh_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).eb = function () {
    return this.yh_1;
  };
  protoOf(PrimitiveSerialDescriptor).fb = function () {
    return this.zh_1;
  };
  protoOf(PrimitiveSerialDescriptor).hb = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).jb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).kb = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).nb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).mb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).lb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.yh_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.yh_1 === other.yh_1 && equals(this.zh_1, other.zh_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.yh_1) + imul(31, this.zh_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).ci = function (_this__u8e3s4, index) {
    return this.ei(this.di(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).ei = function (nestedName) {
    var tmp0_elvis_lhs = this.hi();
    return this.ii(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).di = function (descriptor, index) {
    return descriptor.jb(index);
  };
  protoOf(NamedValueDecoder).ii = function (parentName, childName) {
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
    $this.qi(tag);
    var r = block();
    if (!$this.gi_1) {
      $this.ri();
    }
    $this.gi_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.xc($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var this_0 = this$0;
      var isNullabilitySupported = $deserializer.ra().ya();
      var tmp;
      if (isNullabilitySupported || this_0.qc()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.xc($deserializer, $previousValue);
      } else {
        tmp = this_0.rc();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.fi_1 = ArrayList_init_$Create$();
    this.gi_1 = false;
  }
  protoOf(TaggedDecoder).id = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).ji = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).ki = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).li = function (tag) {
    var tmp = this.ji(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).mi = function (tag) {
    var tmp = this.ji(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ni = function (tag) {
    var tmp = this.ji(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).oi = function (tag) {
    var tmp = this.ji(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).pi = function (tag, enumDescriptor) {
    var tmp = this.ji(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).xc = function (deserializer, previousValue) {
    return this.yc(deserializer);
  };
  protoOf(TaggedDecoder).qc = function () {
    var tmp0_elvis_lhs = this.hi();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.ki(currentTag);
  };
  protoOf(TaggedDecoder).rc = function () {
    return null;
  };
  protoOf(TaggedDecoder).sc = function () {
    return this.li(this.ri());
  };
  protoOf(TaggedDecoder).tc = function () {
    return this.mi(this.ri());
  };
  protoOf(TaggedDecoder).uc = function () {
    return this.ni(this.ri());
  };
  protoOf(TaggedDecoder).vc = function () {
    return this.oi(this.ri());
  };
  protoOf(TaggedDecoder).wc = function (enumDescriptor) {
    return this.pi(this.ri(), enumDescriptor);
  };
  protoOf(TaggedDecoder).zc = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).ad = function (descriptor) {
  };
  protoOf(TaggedDecoder).bd = function (descriptor, index) {
    return this.li(this.ci(descriptor, index));
  };
  protoOf(TaggedDecoder).cd = function (descriptor, index) {
    return this.mi(this.ci(descriptor, index));
  };
  protoOf(TaggedDecoder).dd = function (descriptor, index) {
    return this.ni(this.ci(descriptor, index));
  };
  protoOf(TaggedDecoder).ed = function (descriptor, index) {
    return this.oi(this.ci(descriptor, index));
  };
  protoOf(TaggedDecoder).fd = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ci(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).hd = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ci(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).hi = function () {
    return lastOrNull(this.fi_1);
  };
  protoOf(TaggedDecoder).qi = function (name) {
    this.fi_1.i(name);
  };
  protoOf(TaggedDecoder).ri = function () {
    var r = this.fi_1.l2(get_lastIndex_0(this.fi_1));
    this.gi_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).za = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.si(kClass, typeArgumentsSerializers) : $super.si.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.ui_1 = class2ContextualFactory;
    this.vi_1 = polyBase2Serializers;
    this.wi_1 = polyBase2DefaultSerializerProvider;
    this.xi_1 = polyBase2NamedSerializers;
    this.yi_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).ge = function (baseClass, value) {
    if (!baseClass.r6(value))
      return null;
    var tmp0_safe_receiver = this.vi_1.z(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.wi_1.z(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).fe = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.xi_1.z(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).z(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.yi_1.z(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).si = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.ui_1.z(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zi(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).ti = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.ui_1.b1().e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.w();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.x();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.cj_1;
        collector.dj(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.bj(kclass, serial.aj_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.vi_1.b1().e();
    while (tmp0_iterator_0.f()) {
      var element_0 = tmp0_iterator_0.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.w();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.x();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.b1().e();
      while (tmp0_iterator_1.f()) {
        var element_1 = tmp0_iterator_1.g();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.w();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.x();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.ej(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.wi_1.b1().e();
    while (tmp0_iterator_2.f()) {
      var element_2 = tmp0_iterator_2.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.w();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.x();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.fj(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.yi_1.b1().e();
    while (tmp0_iterator_3.f()) {
      var element_3 = tmp0_iterator_3.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.w();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.x();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.gj(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(SerialDescriptorImpl).ya = get_isNullable;
  protoOf(SerialDescriptorImpl).gb = get_isInline;
  protoOf(AbstractDecoder).gd = decodeSerializableElement$default;
  protoOf(AbstractDecoder).yc = decodeSerializableValue;
  protoOf(AbstractDecoder).jd = decodeSequentially;
  protoOf(AbstractDecoder).ld = decodeCollectionSize;
  protoOf(AbstractEncoder).ce = encodeNotNullMark;
  protoOf(AbstractEncoder).de = beginCollection;
  protoOf(AbstractEncoder).zd = encodeSerializableValue;
  protoOf(AbstractEncoder).be = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ee = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ya = get_isNullable;
  protoOf(ListLikeDescriptor).gb = get_isInline;
  protoOf(ListLikeDescriptor).ib = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ya = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).gb = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).mh = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).ya = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).gb = get_isInline;
  protoOf(PrimitiveSerialDescriptor).ib = get_annotations;
  protoOf(TaggedDecoder).gd = decodeSerializableElement$default;
  protoOf(TaggedDecoder).yc = decodeSerializableValue;
  protoOf(TaggedDecoder).jd = decodeSequentially;
  protoOf(TaggedDecoder).ld = decodeCollectionSize;
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
  _.$_$.c1 = ElementMarker;
  _.$_$.d1 = typeParametersSerializers;
  _.$_$.e1 = GeneratedSerializer;
  _.$_$.f1 = InlinePrimitiveDescriptor;
  _.$_$.g1 = NamedValueDecoder;
  _.$_$.h1 = PluginGeneratedSerialDescriptor;
  _.$_$.i1 = ReferenceArraySerializer;
  _.$_$.j1 = createSimpleEnumSerializer;
  _.$_$.k1 = jsonCachedSerialNames;
  _.$_$.l1 = throwMissingFieldException;
  _.$_$.m1 = EmptySerializersModule_0;
  _.$_$.n1 = contextual;
  _.$_$.o1 = SerializersModuleCollector;
  _.$_$.p1 = DeserializationStrategy;
  _.$_$.q1 = KSerializer;
  _.$_$.r1 = MissingFieldException;
  _.$_$.s1 = SealedClassSerializer;
  _.$_$.t1 = SerializationException;
  _.$_$.u1 = SerializationStrategy;
  _.$_$.v1 = findPolymorphicSerializer_0;
  _.$_$.w1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
