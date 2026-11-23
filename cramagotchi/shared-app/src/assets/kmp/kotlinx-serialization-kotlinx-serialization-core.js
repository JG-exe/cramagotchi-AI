(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m3;
  var interfaceMeta = kotlin_kotlin.$_$.d3;
  var setMetadataFor = kotlin_kotlin.$_$.n3;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var classMeta = kotlin_kotlin.$_$.u2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.o;
  var objectCreate = kotlin_kotlin.$_$.k3;
  var captureStack = kotlin_kotlin.$_$.p2;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.p;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException = kotlin_kotlin.$_$.n4;
  var THROW_CCE = kotlin_kotlin.$_$.p4;
  var isInterface = kotlin_kotlin.$_$.f3;
  var emptyList = kotlin_kotlin.$_$.o1;
  var isBlank = kotlin_kotlin.$_$.a4;
  var toString = kotlin_kotlin.$_$.p3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var equals = kotlin_kotlin.$_$.w2;
  var toList = kotlin_kotlin.$_$.h2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var toHashSet = kotlin_kotlin.$_$.f2;
  var copyToArray = kotlin_kotlin.$_$.n1;
  var toBooleanArray = kotlin_kotlin.$_$.e2;
  var withIndex = kotlin_kotlin.$_$.j2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.a5;
  var Unit_instance = kotlin_kotlin.$_$.c1;
  var toMap = kotlin_kotlin.$_$.i2;
  var lazy = kotlin_kotlin.$_$.x4;
  var contentEquals = kotlin_kotlin.$_$.i1;
  var until = kotlin_kotlin.$_$.u3;
  var joinToString = kotlin_kotlin.$_$.v1;
  var KProperty1 = kotlin_kotlin.$_$.w3;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a3;
  var objectMeta = kotlin_kotlin.$_$.l3;
  var ensureNotNull = kotlin_kotlin.$_$.t4;
  var getStringHashCode = kotlin_kotlin.$_$.b3;
  var toIntOrNull = kotlin_kotlin.$_$.h4;
  var hashCode = kotlin_kotlin.$_$.c3;
  var isArray = kotlin_kotlin.$_$.e3;
  var arrayIterator = kotlin_kotlin.$_$.n2;
  var ArrayList = kotlin_kotlin.$_$.d1;
  var asList = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.g;
  var longArray = kotlin_kotlin.$_$.g3;
  var Companion_getInstance = kotlin_kotlin.$_$.b1;
  var get_lastIndex = kotlin_kotlin.$_$.w1;
  var Long = kotlin_kotlin.$_$.o4;
  var countTrailingZeroBits = kotlin_kotlin.$_$.s4;
  var indexOf = kotlin_kotlin.$_$.s1;
  var contentToString = kotlin_kotlin.$_$.k1;
  var Enum = kotlin_kotlin.$_$.l4;
  var fillArrayVal = kotlin_kotlin.$_$.x2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var booleanArray = kotlin_kotlin.$_$.o2;
  var emptyMap = kotlin_kotlin.$_$.p1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy_0 = kotlin_kotlin.$_$.w4;
  var contentHashCode = kotlin_kotlin.$_$.j1;
  var charSequenceLength = kotlin_kotlin.$_$.s2;
  var lastOrNull = kotlin_kotlin.$_$.y1;
  var get_lastIndex_0 = kotlin_kotlin.$_$.x1;
  var Map = kotlin_kotlin.$_$.f1;
  var KClass = kotlin_kotlin.$_$.v3;
  var get_indices = kotlin_kotlin.$_$.u1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t;
  var get_indices_0 = kotlin_kotlin.$_$.t1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(elementNames$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.qa(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.cd(descriptor, index, deserializer, previousValue) : $super.cd.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.wc(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.pa(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.oa().va();
    if (isNullabilitySupported) {
      return this.wd(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.ld();
    } else {
      this.zd();
      this.wd(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(EnumSerializer, 'EnumSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(EnumDescriptor, 'EnumDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.aj(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ra(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.sa());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.ta(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.sa());
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
    MissingFieldException.call($this, missingFields, missingFields.s() === 1 ? "Field '" + missingFields.z(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
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
    this.ua_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.oa().va()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.wa(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.oa();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ab_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.xa_1);
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
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.mb_1 = $this_elementDescriptors;
    this.lb_1 = $this_elementDescriptors.eb();
  }
  protoOf(elementDescriptors$1$1).q = function () {
    return this.lb_1 > 0;
  };
  protoOf(elementDescriptors$1$1).r = function () {
    var tmp = this.mb_1.eb();
    var tmp1 = this.lb_1;
    this.lb_1 = tmp1 - 1 | 0;
    return this.mb_1.jb(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.nb_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).p = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.nb_1);
  };
  function elementNames$1$1($this_elementNames) {
    this.pb_1 = $this_elementNames;
    this.ob_1 = $this_elementNames.eb();
  }
  protoOf(elementNames$1$1).q = function () {
    return this.ob_1 > 0;
  };
  protoOf(elementNames$1$1).r = function () {
    var tmp = this.pb_1.eb();
    var tmp1 = this.ob_1;
    this.ob_1 = tmp1 - 1 | 0;
    return this.pb_1.gb(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.qb_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).p = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1$1(this.qb_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.ub_1.s(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.rb_1 = serialName;
    this.sb_1 = false;
    this.tb_1 = emptyList();
    this.ub_1 = ArrayList_init_$Create$();
    this.vb_1 = HashSet_init_$Create$();
    this.wb_1 = ArrayList_init_$Create$();
    this.xb_1 = ArrayList_init_$Create$();
    this.yb_1 = ArrayList_init_$Create$();
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.kc_1;
    _hashCode$factory();
    return this_0.k4();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.jc_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.gb(it) + ': ' + this$0.jb(it).bb();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.zb_1 = serialName;
    this.ac_1 = kind;
    this.bc_1 = elementsCount;
    this.cc_1 = builder.tb_1;
    this.dc_1 = toHashSet(builder.ub_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.ub_1;
    tmp.ec_1 = copyToArray(this_0);
    this.fc_1 = compactArray(builder.wb_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.xb_1;
    tmp_0.gc_1 = copyToArray(this_1);
    this.hc_1 = toBooleanArray(builder.yb_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.ec_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.u8_1, item.t8_1);
      destination.m(tmp$ret$2);
    }
    tmp_1.ic_1 = toMap(destination);
    this.jc_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.kc_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).bb = function () {
    return this.zb_1;
  };
  protoOf(SerialDescriptorImpl).cb = function () {
    return this.ac_1;
  };
  protoOf(SerialDescriptorImpl).eb = function () {
    return this.bc_1;
  };
  protoOf(SerialDescriptorImpl).fb = function () {
    return this.cc_1;
  };
  protoOf(SerialDescriptorImpl).lc = function () {
    return this.dc_1;
  };
  protoOf(SerialDescriptorImpl).gb = function (index) {
    return getChecked(this.ec_1, index);
  };
  protoOf(SerialDescriptorImpl).hb = function (name) {
    var tmp0_elvis_lhs = this.ic_1.s1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).ib = function (index) {
    return getChecked(this.gc_1, index);
  };
  protoOf(SerialDescriptorImpl).jb = function (index) {
    return getChecked(this.fc_1, index);
  };
  protoOf(SerialDescriptorImpl).kb = function (index) {
    return getChecked_0(this.hc_1, index);
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
      if (!(this.bb() === other.bb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.jc_1, other.jc_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eb() === other.eb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.eb();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.jb(index).bb() === other.jb(index).bb())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.jb(index).cb(), other.jb(index).cb())) {
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
    var tmp = until(0, this.bc_1);
    var tmp_0 = this.zb_1 + '(';
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
    return ensureNotNull(getKClassFromExpression(this).t4());
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
  protoOf(AbstractDecoder).mc = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).nc = function () {
    return true;
  };
  protoOf(AbstractDecoder).oc = function () {
    return null;
  };
  protoOf(AbstractDecoder).pc = function () {
    var tmp = this.mc();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qc = function () {
    var tmp = this.mc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rc = function () {
    var tmp = this.mc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).sc = function () {
    var tmp = this.mc();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tc = function (enumDescriptor) {
    var tmp = this.mc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).uc = function (deserializer, previousValue) {
    return this.vc(deserializer);
  };
  protoOf(AbstractDecoder).wc = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).xc = function (descriptor) {
  };
  protoOf(AbstractDecoder).yc = function (descriptor, index) {
    return this.pc();
  };
  protoOf(AbstractDecoder).zc = function (descriptor, index) {
    return this.qc();
  };
  protoOf(AbstractDecoder).ad = function (descriptor, index) {
    return this.rc();
  };
  protoOf(AbstractDecoder).bd = function (descriptor, index) {
    return this.sc();
  };
  protoOf(AbstractDecoder).cd = function (descriptor, index, deserializer, previousValue) {
    return this.uc(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ed = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.oa().va();
    var tmp;
    if (isNullabilitySupported ? true : this.nc()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.uc(deserializer, previousValue);
    } else {
      tmp = this.oc();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).wc = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).xc = function (descriptor) {
  };
  protoOf(AbstractEncoder).jd = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).kd = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).ld = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).md = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).nd = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).od = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).pd = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).qd = function (enumDescriptor, index) {
    return this.kd(index);
  };
  protoOf(AbstractEncoder).rd = function (descriptor, index, value) {
    if (this.jd(descriptor, index)) {
      this.md(value);
    }
  };
  protoOf(AbstractEncoder).sd = function (descriptor, index, value) {
    if (this.jd(descriptor, index)) {
      this.nd(value);
    }
  };
  protoOf(AbstractEncoder).td = function (descriptor, index, value) {
    if (this.jd(descriptor, index)) {
      this.od(value);
    }
  };
  protoOf(AbstractEncoder).ud = function (descriptor, index, value) {
    if (this.jd(descriptor, index)) {
      this.pd(value);
    }
  };
  protoOf(AbstractEncoder).vd = function (descriptor, index, serializer, value) {
    if (this.jd(descriptor, index)) {
      this.wd(serializer, value);
    }
  };
  protoOf(AbstractEncoder).xd = function (descriptor, index, serializer, value) {
    if (this.jd(descriptor, index)) {
      this.yd(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    this.ce_1 = -1;
    this.de_1 = -3;
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).ta = function (decoder, klassName) {
    return decoder.fd().ee(this.sa(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ra = function (encoder, value) {
    return encoder.fd().fe(this.sa(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.t4();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.t4() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.t4() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).bb = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.ie_1 = elementDescriptor;
    this.je_1 = 1;
  }
  protoOf(ListLikeDescriptor).cb = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).eb = function () {
    return this.je_1;
  };
  protoOf(ListLikeDescriptor).gb = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).hb = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).kb = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.bb() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).ib = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.bb() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).jb = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.bb() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ie_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ie_1, other.ie_1) ? this.bb() === other.bb() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ie_1), 31) + getStringHashCode(this.bb()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.bb() + '(' + this.ie_1 + ')';
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.le_1 = kClass;
    this.me_1 = new ArrayClassDesc(eSerializer.oa());
  }
  protoOf(ReferenceArraySerializer).oa = function () {
    return this.me_1;
  };
  protoOf(ReferenceArraySerializer).ne = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).oe = function (_this__u8e3s4) {
    return this.ne((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pe = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).qe = function (_this__u8e3s4) {
    return this.pe((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).re = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ReferenceArraySerializer).se = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ReferenceArraySerializer).te = function (_this__u8e3s4) {
    return this.se(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ue = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.le_1);
  };
  protoOf(ReferenceArraySerializer).ve = function (_this__u8e3s4) {
    return this.ue(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).we = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).xe = function (_this__u8e3s4) {
    return this.we((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ye = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c2(size);
  };
  protoOf(ReferenceArraySerializer).ze = function (_this__u8e3s4, size) {
    return this.ye(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).af = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(index, element);
  };
  protoOf(ReferenceArraySerializer).bf = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.af(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.cf_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).df = function (encoder, value) {
    var size = this.oe(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.oa();
    var composite = encoder.ae(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.qe(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.vd(this.oa(), index, this.cf_1, iterator.r());
      }
       while (inductionVariable < size);
    composite.xc(descriptor);
  };
  protoOf(CollectionLikeSerializer).pa = function (encoder, value) {
    return this.df(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).ef = function (decoder, builder, startIndex, size) {
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
        this.ff(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ff = function (decoder, index, builder, checkIndex) {
    this.bf(builder, index, decoder.dd(this.oa(), index, this.cf_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.id($this.oa());
    $this.ze(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).hf = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.xe(previous);
    var builder = tmp1_elvis_lhs == null ? this.re() : tmp1_elvis_lhs;
    var startIndex = this.te(builder);
    var compositeDecoder = decoder.wc(this.oa());
    if (compositeDecoder.gd()) {
      this.ef(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.hd(this.oa());
        if (index === -1)
          break $l$loop;
        this.gf(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.xc(this.oa());
    return this.ve(builder);
  };
  protoOf(AbstractCollectionSerializer).qa = function (decoder) {
    return this.hf(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).gf = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ff(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ff.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.if_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).o7(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.mf_1[slot] = $this.mf_1[slot].p7((new Long(1, 0)).o7(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.mf_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.mf_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.n7());
          slotMarks = slotMarks.p7((new Long(1, 0)).o7(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.kf_1($this.jf_1, index)) {
            $this.mf_1[slot] = slotMarks;
            return index;
          }
        }
        $this.mf_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_1();
    this.jf_1 = descriptor;
    this.kf_1 = readIfAbsent;
    var elementsCount = this.jf_1.eb();
    Companion_getInstance();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).o7(elementsCount);
      }
      tmp.lf_1 = tmp_0;
      this.mf_1 = Companion_getInstance_1().if_1;
    } else {
      this.lf_1 = new Long(0, 0);
      this.mf_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).nf = function (index) {
    Companion_getInstance();
    if (index < 64) {
      this.lf_1 = this.lf_1.p7((new Long(1, 0)).o7(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).of = function () {
    var elementsCount = this.jf_1.eb();
    while (!this.lf_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.lf_1.n7());
      this.lf_1 = this.lf_1.p7((new Long(1, 0)).o7(index));
      if (this.kf_1(this.jf_1, index)) {
        return index;
      }
    }
    Companion_getInstance();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.pf_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.pf_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.eg(element.v6_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.qf_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.pf_1 = values;
    this.qf_1 = null;
    var tmp = this;
    tmp.rf_1 = lazy(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).oa = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.rf_1;
    descriptor$factory();
    return this_0.k4();
  };
  protoOf(EnumSerializer).fg = function (encoder, value) {
    var index = indexOf(this.pf_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0('' + value + ' is not a valid enum ' + this.oa().bb() + ', ' + ('must be one of ' + contentToString(this.pf_1)));
    }
    encoder.qd(this.oa(), index);
  };
  protoOf(EnumSerializer).pa = function (encoder, value) {
    return this.fg(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).qa = function (decoder) {
    var index = decoder.tc(this.oa());
    if (!(0 <= index ? index <= (this.pf_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.oa().bb() + ' enum values, ' + ('values size is ' + this.pf_1.length));
    }
    return this.pf_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.oa().bb() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.tg_1;
    elementDescriptors$factory();
    return this_0.k4();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.gb(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.sg_1 = ENUM_getInstance();
    var tmp = this;
    tmp.tg_1 = lazy(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).cb = function () {
    return this.sg_1;
  };
  protoOf(EnumDescriptor).jb = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.cb() === ENUM_getInstance()))
      return false;
    if (!(this.bb() === other.bb()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.bb() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.bb());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
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
      return receiver.oa();
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
    this.ih_1 = true;
  }
  protoOf(InlineClassDescriptor).db = function () {
    return this.ih_1;
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
      if (!(this.bb() === other.bb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.ih_1 ? contentEquals(this.ug(), other.ug()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eb() === other.eb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.eb();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.jb(index).bb() === other.jb(index).bb())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.jb(index).cb(), other.jb(index).cb())) {
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
    this.jh_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).kh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.jh_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).oa = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).pa = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).qa = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.mh_1 = serializer;
    this.nh_1 = new SerialDescriptorForNullable(this.mh_1.oa());
  }
  protoOf(NullableSerializer).oa = function () {
    return this.nh_1;
  };
  protoOf(NullableSerializer).oh = function (encoder, value) {
    if (!(value == null)) {
      encoder.zd();
      encoder.wd(this.mh_1, value);
    } else {
      encoder.ld();
    }
  };
  protoOf(NullableSerializer).pa = function (encoder, value) {
    return this.oh(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).qa = function (decoder) {
    return decoder.nc() ? decoder.vc(this.mh_1) : decoder.oc();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.mh_1, other.mh_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.mh_1);
  };
  function SerialDescriptorForNullable(original) {
    this.xa_1 = original;
    this.ya_1 = this.xa_1.bb() + '?';
    this.za_1 = cachedSerialNames(this.xa_1);
  }
  protoOf(SerialDescriptorForNullable).fb = function () {
    return this.xa_1.fb();
  };
  protoOf(SerialDescriptorForNullable).eb = function () {
    return this.xa_1.eb();
  };
  protoOf(SerialDescriptorForNullable).db = function () {
    return this.xa_1.db();
  };
  protoOf(SerialDescriptorForNullable).cb = function () {
    return this.xa_1.cb();
  };
  protoOf(SerialDescriptorForNullable).ib = function (index) {
    return this.xa_1.ib(index);
  };
  protoOf(SerialDescriptorForNullable).jb = function (index) {
    return this.xa_1.jb(index);
  };
  protoOf(SerialDescriptorForNullable).hb = function (name) {
    return this.xa_1.hb(name);
  };
  protoOf(SerialDescriptorForNullable).gb = function (index) {
    return this.xa_1.gb(index);
  };
  protoOf(SerialDescriptorForNullable).kb = function (index) {
    return this.xa_1.kb(index);
  };
  protoOf(SerialDescriptorForNullable).bb = function () {
    return this.ya_1;
  };
  protoOf(SerialDescriptorForNullable).lc = function () {
    return this.za_1;
  };
  protoOf(SerialDescriptorForNullable).va = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.xa_1, other.xa_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.xa_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.xa_1), 31);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.lc();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.eb());
    var inductionVariable = 0;
    var last = _this__u8e3s4.eb();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.gb(i);
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
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.v())) {
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
          var element = descriptor.gb(i);
          missingFields.m(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.bb());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.bg_1;
    childSerializers$factory();
    return this_0.k4();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.dg_1;
    _hashCode$factory_0();
    return this_0.k4();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.wf_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.wf_1[i];
        indices.n1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.tf_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kh();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.tf_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lh();
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
          var tmp$ret$0 = item.oa();
          destination.m(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ug());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.gb(i) + ': ' + this$0.jb(i).bb();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.sf_1 = serialName;
    this.tf_1 = generatedSerializer;
    this.uf_1 = elementsCount;
    this.vf_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.uf_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.wf_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.uf_1;
    tmp_3.xf_1 = fillArrayVal(Array(size), null);
    this.yf_1 = null;
    this.zf_1 = booleanArray(this.uf_1);
    this.ag_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.bg_1 = lazy_0(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.cg_1 = lazy_0(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.dg_1 = lazy_0(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).bb = function () {
    return this.sf_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).eb = function () {
    return this.uf_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).cb = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).fb = function () {
    var tmp0_elvis_lhs = this.yf_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).lc = function () {
    return this.ag_1.m1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ug = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.cg_1;
    typeParameterDescriptors$factory();
    return this_0.k4();
  };
  protoOf(PluginGeneratedSerialDescriptor).vg = function (name, isOptional) {
    this.vf_1 = this.vf_1 + 1 | 0;
    this.wf_1[this.vf_1] = name;
    this.zf_1[this.vf_1] = isOptional;
    this.xf_1[this.vf_1] = null;
    if (this.vf_1 === (this.uf_1 - 1 | 0)) {
      this.ag_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).eg = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.vg(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.vg.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).jb = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).oa();
  };
  protoOf(PluginGeneratedSerialDescriptor).kb = function (index) {
    return getChecked_0(this.zf_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ib = function (index) {
    var tmp0_elvis_lhs = getChecked(this.xf_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).gb = function (index) {
    return getChecked(this.wf_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).hb = function (name) {
    var tmp0_elvis_lhs = this.ag_1.s1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
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
      if (!(this.bb() === other.bb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.ug(), other.ug())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eb() === other.eb())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.eb();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.jb(index).bb() === other.jb(index).bb())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.jb(index).cb(), other.jb(index).cb())) {
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
    var tmp = until(0, this.uf_1);
    var tmp_0 = this.bb() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.bb());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.bb();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.p();
    while (tmp0_iterator_0.q()) {
      var element_0 = tmp0_iterator_0.r();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.cb();
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
      return receiver.ug();
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
    this.ph_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).oa = function () {
    return this.ph_1;
  };
  protoOf(StringSerializer).qh = function (encoder, value) {
    return encoder.pd(value);
  };
  protoOf(StringSerializer).pa = function (encoder, value) {
    return this.qh(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).qa = function (decoder) {
    return decoder.sc();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.rh_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).oa = function () {
    return this.rh_1;
  };
  protoOf(DoubleSerializer).sh = function (encoder, value) {
    return encoder.od(value);
  };
  protoOf(DoubleSerializer).pa = function (encoder, value) {
    return this.sh(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).qa = function (decoder) {
    return decoder.rc();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.th_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).oa = function () {
    return this.th_1;
  };
  protoOf(IntSerializer).uh = function (encoder, value) {
    return encoder.nd(value);
  };
  protoOf(IntSerializer).pa = function (encoder, value) {
    return this.uh(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).qa = function (decoder) {
    return decoder.qc();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.vh_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).oa = function () {
    return this.vh_1;
  };
  protoOf(BooleanSerializer).wh = function (encoder, value) {
    return encoder.md(value);
  };
  protoOf(BooleanSerializer).pa = function (encoder, value) {
    return this.wh(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).qa = function (decoder) {
    return decoder.pc();
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
    this.xh_1 = serialName;
    this.yh_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).bb = function () {
    return this.xh_1;
  };
  protoOf(PrimitiveSerialDescriptor).cb = function () {
    return this.yh_1;
  };
  protoOf(PrimitiveSerialDescriptor).eb = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).gb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).hb = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).kb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).jb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ib = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.xh_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.xh_1 === other.xh_1 ? equals(this.yh_1, other.yh_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.xh_1) + imul(31, this.yh_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).bi = function (_this__u8e3s4, index) {
    return this.di(this.ci(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).di = function (nestedName) {
    var tmp0_elvis_lhs = this.gi();
    return this.hi(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).ci = function (descriptor, index) {
    return descriptor.gb(index);
  };
  protoOf(NamedValueDecoder).hi = function (parentName, childName) {
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
    $this.pi(tag);
    var r = block();
    if (!$this.fi_1) {
      $this.qi();
    }
    $this.fi_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.uc($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var this_0 = this$0;
      var isNullabilitySupported = $deserializer.oa().va();
      var tmp;
      if (isNullabilitySupported ? true : this_0.nc()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.uc($deserializer, $previousValue);
      } else {
        tmp = this_0.oc();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.ei_1 = ArrayList_init_$Create$();
    this.fi_1 = false;
  }
  protoOf(TaggedDecoder).fd = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).ii = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).ji = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).ki = function (tag) {
    var tmp = this.ii(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).li = function (tag) {
    var tmp = this.ii(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).mi = function (tag) {
    var tmp = this.ii(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ni = function (tag) {
    var tmp = this.ii(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).oi = function (tag, enumDescriptor) {
    var tmp = this.ii(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).uc = function (deserializer, previousValue) {
    return this.vc(deserializer);
  };
  protoOf(TaggedDecoder).nc = function () {
    var tmp0_elvis_lhs = this.gi();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.ji(currentTag);
  };
  protoOf(TaggedDecoder).oc = function () {
    return null;
  };
  protoOf(TaggedDecoder).pc = function () {
    return this.ki(this.qi());
  };
  protoOf(TaggedDecoder).qc = function () {
    return this.li(this.qi());
  };
  protoOf(TaggedDecoder).rc = function () {
    return this.mi(this.qi());
  };
  protoOf(TaggedDecoder).sc = function () {
    return this.ni(this.qi());
  };
  protoOf(TaggedDecoder).tc = function (enumDescriptor) {
    return this.oi(this.qi(), enumDescriptor);
  };
  protoOf(TaggedDecoder).wc = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).xc = function (descriptor) {
  };
  protoOf(TaggedDecoder).yc = function (descriptor, index) {
    return this.ki(this.bi(descriptor, index));
  };
  protoOf(TaggedDecoder).zc = function (descriptor, index) {
    return this.li(this.bi(descriptor, index));
  };
  protoOf(TaggedDecoder).ad = function (descriptor, index) {
    return this.mi(this.bi(descriptor, index));
  };
  protoOf(TaggedDecoder).bd = function (descriptor, index) {
    return this.ni(this.bi(descriptor, index));
  };
  protoOf(TaggedDecoder).cd = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.bi(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ed = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.bi(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).gi = function () {
    return lastOrNull(this.ei_1);
  };
  protoOf(TaggedDecoder).pi = function (name) {
    this.ei_1.m(name);
  };
  protoOf(TaggedDecoder).qi = function () {
    var r = this.ei_1.c1(get_lastIndex_0(this.ei_1));
    this.fi_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).wa = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ri(kClass, typeArgumentsSerializers) : $super.ri.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.ti_1 = class2ContextualFactory;
    this.ui_1 = polyBase2Serializers;
    this.vi_1 = polyBase2DefaultSerializerProvider;
    this.wi_1 = polyBase2NamedSerializers;
    this.xi_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).fe = function (baseClass, value) {
    if (!baseClass.u4(value))
      return null;
    var tmp0_safe_receiver = this.ui_1.s1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.vi_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).ee = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.wi_1.s1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).s1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.xi_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ri = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.ti_1.s1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yi(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).si = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.ti_1.t1().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.k4();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.bj_1;
        collector.cj(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.aj(kclass, serial.zi_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.ui_1.t1().p();
    while (tmp0_iterator_0.q()) {
      var element_0 = tmp0_iterator_0.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.v2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.k4();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.t1().p();
      while (tmp0_iterator_1.q()) {
        var element_1 = tmp0_iterator_1.r();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.v2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.k4();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.dj(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.vi_1.t1().p();
    while (tmp0_iterator_2.q()) {
      var element_2 = tmp0_iterator_2.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.v2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.k4();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.ej(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.xi_1.t1().p();
    while (tmp0_iterator_3.q()) {
      var element_3 = tmp0_iterator_3.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.v2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.k4();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.fj(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).va = get_isNullable;
  protoOf(SerialDescriptorImpl).db = get_isInline;
  protoOf(AbstractDecoder).dd = decodeSerializableElement$default;
  protoOf(AbstractDecoder).vc = decodeSerializableValue;
  protoOf(AbstractDecoder).gd = decodeSequentially;
  protoOf(AbstractDecoder).id = decodeCollectionSize;
  protoOf(AbstractEncoder).zd = encodeNotNullMark;
  protoOf(AbstractEncoder).ae = beginCollection;
  protoOf(AbstractEncoder).wd = encodeSerializableValue;
  protoOf(AbstractEncoder).yd = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).be = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).va = get_isNullable;
  protoOf(ListLikeDescriptor).db = get_isInline;
  protoOf(ListLikeDescriptor).fb = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).va = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).db = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).lh = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).va = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).db = get_isInline;
  protoOf(PrimitiveSerialDescriptor).fb = get_annotations;
  protoOf(TaggedDecoder).dd = decodeSerializableElement$default;
  protoOf(TaggedDecoder).vc = decodeSerializableValue;
  protoOf(TaggedDecoder).gd = decodeSequentially;
  protoOf(TaggedDecoder).id = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance = new Companion();
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
  _.$_$.j = Companion_instance;
  _.$_$.k = BooleanSerializer_getInstance;
  _.$_$.l = DoubleSerializer_getInstance;
  _.$_$.m = IntSerializer_getInstance;
  _.$_$.n = StringSerializer_getInstance;
  _.$_$.o = get_nullable;
  _.$_$.p = serializer;
  _.$_$.q = PolymorphicKind;
  _.$_$.r = PrimitiveKind;
  _.$_$.s = SerialDescriptor;
  _.$_$.t = ENUM;
  _.$_$.u = buildSerialDescriptor;
  _.$_$.v = getContextualDescriptor;
  _.$_$.w = AbstractDecoder;
  _.$_$.x = AbstractEncoder;
  _.$_$.y = CompositeDecoder;
  _.$_$.z = CompositeEncoder;
  _.$_$.a1 = Decoder;
  _.$_$.b1 = Encoder;
  _.$_$.c1 = AbstractPolymorphicSerializer;
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
