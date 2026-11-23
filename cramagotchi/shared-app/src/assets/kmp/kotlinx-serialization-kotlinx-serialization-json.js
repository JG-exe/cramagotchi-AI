(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var protoOf = kotlin_kotlin.$_$.m3;
  var objectMeta = kotlin_kotlin.$_$.l3;
  var setMetadataFor = kotlin_kotlin.$_$.n3;
  var Unit_instance = kotlin_kotlin.$_$.c1;
  var classMeta = kotlin_kotlin.$_$.u2;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.p3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var charSequenceLength = kotlin_kotlin.$_$.s2;
  var charSequenceGet = kotlin_kotlin.$_$.r2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v;
  var equals = kotlin_kotlin.$_$.w2;
  var Enum = kotlin_kotlin.$_$.l4;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var interfaceMeta = kotlin_kotlin.$_$.d3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.p4;
  var hashCode = kotlin_kotlin.$_$.c3;
  var joinToString = kotlin_kotlin.$_$.v1;
  var Map = kotlin_kotlin.$_$.f1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.w4;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.y2;
  var getStringHashCode = kotlin_kotlin.$_$.b3;
  var List = kotlin_kotlin.$_$.e1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.u;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.z;
  var numberRangeToNumber = kotlin_kotlin.$_$.h3;
  var ClosedRange = kotlin_kotlin.$_$.q3;
  var isInterface = kotlin_kotlin.$_$.f3;
  var contains = kotlin_kotlin.$_$.t3;
  var toDouble = kotlin_kotlin.$_$.g4;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.a1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var toLong = kotlin_kotlin.$_$.o3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.p2;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.t2;
  var coerceAtLeast = kotlin_kotlin.$_$.r3;
  var coerceAtMost = kotlin_kotlin.$_$.s3;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.d2;
  var emptyMap = kotlin_kotlin.$_$.p1;
  var getValue = kotlin_kotlin.$_$.r1;
  var fillArrayVal = kotlin_kotlin.$_$.x2;
  var copyOf = kotlin_kotlin.$_$.l1;
  var copyOf_0 = kotlin_kotlin.$_$.m1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.j4;
  var invoke = kotlin_kotlin.$_$.u4;
  var CoroutineImpl = kotlin_kotlin.$_$.l2;
  var DeepRecursiveScope = kotlin_kotlin.$_$.k4;
  var Unit = kotlin_kotlin.$_$.r4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k2;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var getKClass = kotlin_kotlin.$_$.b;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var ensureNotNull = kotlin_kotlin.$_$.t4;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var substringBefore = kotlin_kotlin.$_$.f4;
  var removeSuffix = kotlin_kotlin.$_$.d4;
  var substringAfter = kotlin_kotlin.$_$.e4;
  var contains_0 = kotlin_kotlin.$_$.x3;
  var plus = kotlin_kotlin.$_$.z4;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var IllegalArgumentException = kotlin_kotlin.$_$.n4;
  var isFinite = kotlin_kotlin.$_$.v4;
  var objectCreate = kotlin_kotlin.$_$.k3;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y4;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.x;
  var numberToChar = kotlin_kotlin.$_$.i3;
  var equals_0 = kotlin_kotlin.$_$.y3;
  var toString_0 = kotlin_kotlin.$_$.y;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var emptySet = kotlin_kotlin.$_$.q1;
  var plus_0 = kotlin_kotlin.$_$.b2;
  var toInt = kotlin_kotlin.$_$.i4;
  var toList = kotlin_kotlin.$_$.g2;
  var enumEntries = kotlin_kotlin.$_$.m2;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var last = kotlin_kotlin.$_$.z1;
  var removeLast = kotlin_kotlin.$_$.c2;
  var lastIndexOf = kotlin_kotlin.$_$.b4;
  var Long = kotlin_kotlin.$_$.o4;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.w;
  var Companion_getInstance = kotlin_kotlin.$_$.b1;
  var numberToLong = kotlin_kotlin.$_$.j3;
  var charArray = kotlin_kotlin.$_$.q2;
  var indexOf = kotlin_kotlin.$_$.z3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(ClassDiscriminatorMode, 'ClassDiscriminatorMode', classMeta, Enum);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map]);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement);
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, VOID, VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, VOID, JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.gj_1 = configuration;
    this.hj_1 = serializersModule;
    this.ij_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).fd = function () {
    return this.hj_1;
  };
  protoOf(Json).jj = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.mj();
    }
  };
  protoOf(Json).kj = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.oa(), null);
    var result = input.vc(deserializer);
    lexer.zj();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.rk();
    return new JsonImpl(conf, builder.qk_1);
  }
  function JsonBuilder(json) {
    this.ak_1 = json.gj_1.sk_1;
    this.bk_1 = json.gj_1.xk_1;
    this.ck_1 = json.gj_1.tk_1;
    this.dk_1 = json.gj_1.uk_1;
    this.ek_1 = json.gj_1.vk_1;
    this.fk_1 = json.gj_1.wk_1;
    this.gk_1 = json.gj_1.yk_1;
    this.hk_1 = json.gj_1.zk_1;
    this.ik_1 = json.gj_1.al_1;
    this.jk_1 = json.gj_1.bl_1;
    this.kk_1 = json.gj_1.hl_1;
    this.lk_1 = json.gj_1.cl_1;
    this.mk_1 = json.gj_1.dl_1;
    this.nk_1 = json.gj_1.el_1;
    this.ok_1 = json.gj_1.fl_1;
    this.pk_1 = json.gj_1.gl_1;
    this.qk_1 = json.fd();
  }
  protoOf(JsonBuilder).rk = function () {
    if (this.ik_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.jk_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.kk_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.fk_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.gk_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.gk_1 === '    ')) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.gk_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      var allWhitespaces = tmp$ret$4;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.gk_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.ak_1, this.ck_1, this.dk_1, this.ek_1, this.fk_1, this.bk_1, this.gk_1, this.hk_1, this.ik_1, this.jk_1, this.lk_1, this.mk_1, this.nk_1, this.ok_1, this.pk_1, this.kk_1);
  };
  function validateConfiguration($this) {
    if (equals($this.fd(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.gj_1.al_1, $this.gj_1.bl_1);
    $this.fd().si(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.sk_1 = encodeDefaults;
    this.tk_1 = ignoreUnknownKeys;
    this.uk_1 = isLenient;
    this.vk_1 = allowStructuredMapKeys;
    this.wk_1 = prettyPrint;
    this.xk_1 = explicitNulls;
    this.yk_1 = prettyPrintIndent;
    this.zk_1 = coerceInputValues;
    this.al_1 = useArrayPolymorphism;
    this.bl_1 = classDiscriminator;
    this.cl_1 = allowSpecialFloatingPointValues;
    this.dl_1 = useAlternativeNames;
    this.el_1 = namingStrategy;
    this.fl_1 = decodeEnumsCaseInsensitive;
    this.gl_1 = allowTrailingComma;
    this.hl_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.sk_1 + ', ignoreUnknownKeys=' + this.tk_1 + ', isLenient=' + this.uk_1 + ', ' + ('allowStructuredMapKeys=' + this.vk_1 + ', prettyPrint=' + this.wk_1 + ', explicitNulls=' + this.xk_1 + ', ') + ("prettyPrintIndent='" + this.yk_1 + "', coerceInputValues=" + this.zk_1 + ', useArrayPolymorphism=' + this.al_1 + ', ') + ("classDiscriminator='" + this.bl_1 + "', allowSpecialFloatingPointValues=" + this.cl_1 + ', ') + ('useAlternativeNames=' + this.dl_1 + ', namingStrategy=' + this.el_1 + ', decodeEnumsCaseInsensitive=' + this.fl_1 + ', ') + ('allowTrailingComma=' + this.gl_1 + ', classDiscriminatorMode=' + this.hl_1 + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.v2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.k4();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.h4(_Char___init__impl__6a9atx(58));
    this_0.f4(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.kl_1 = content;
  }
  protoOf(JsonObject).t1 = function () {
    return this.kl_1.t1();
  };
  protoOf(JsonObject).m1 = function () {
    return this.kl_1.m1();
  };
  protoOf(JsonObject).s = function () {
    return this.kl_1.s();
  };
  protoOf(JsonObject).ll = function (key) {
    return this.kl_1.q1(key);
  };
  protoOf(JsonObject).q1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.ll((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).ml = function (key) {
    return this.kl_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ml((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).v = function () {
    return this.kl_1.v();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.kl_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.kl_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.kl_1.t1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.nl_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ol_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).pl = function () {
    return this.nl_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.pl();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.ql_1 = isString;
    this.rl_1 = coerceToInlineType;
    this.sl_1 = toString(body);
    if (!(this.rl_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.rl_1.db()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).pl = function () {
    return this.sl_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.ql_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.sl_1);
      tmp = this_0.toString();
    } else {
      tmp = this.sl_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.ql_1 === other.ql_1))
      return false;
    if (!(this.sl_1 === other.sl_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.ql_1);
    result = imul(31, result) + getStringHashCode(this.sl_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.tl_1 = content;
  }
  protoOf(JsonArray).s = function () {
    return this.tl_1.s();
  };
  protoOf(JsonArray).ul = function (elements) {
    return this.tl_1.u(elements);
  };
  protoOf(JsonArray).u = function (elements) {
    return this.ul(elements);
  };
  protoOf(JsonArray).z = function (index) {
    return this.tl_1.z(index);
  };
  protoOf(JsonArray).v = function () {
    return this.tl_1.v();
  };
  protoOf(JsonArray).p = function () {
    return this.tl_1.p();
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.tl_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.tl_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.tl_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.pl());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.pl())).vl();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.pl() + ' is not an Int');
    return result.j6();
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.pl());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.pl();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.wl_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).oa = function () {
    return this.wl_1;
  };
  protoOf(JsonNullSerializer).xl = function (encoder, value) {
    verify(encoder);
    encoder.ld();
  };
  protoOf(JsonNullSerializer).pa = function (encoder, value) {
    return this.xl(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).qa = function (decoder) {
    verify_0(decoder);
    if (decoder.nc()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.oc();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.yl_1 = writer;
    this.zl_1 = true;
  }
  protoOf(Composer).am = function () {
    this.zl_1 = true;
  };
  protoOf(Composer).bm = function () {
    return Unit_instance;
  };
  protoOf(Composer).cm = function () {
    this.zl_1 = false;
  };
  protoOf(Composer).dm = function () {
    this.zl_1 = false;
  };
  protoOf(Composer).em = function () {
    return Unit_instance;
  };
  protoOf(Composer).fm = function (v) {
    return this.yl_1.gm(v);
  };
  protoOf(Composer).hm = function (v) {
    return this.yl_1.im(v);
  };
  protoOf(Composer).jm = function (v) {
    return this.yl_1.im(v.toString());
  };
  protoOf(Composer).km = function (v) {
    return this.yl_1.lm(toLong(v));
  };
  protoOf(Composer).mm = function (v) {
    return this.yl_1.im(v.toString());
  };
  protoOf(Composer).nm = function (value) {
    return this.yl_1.om(value);
  };
  function Composer_0(sb, json) {
    return json.gj_1.wk_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.rm_1 = json;
    this.sm_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).am = function () {
    this.zl_1 = true;
    this.sm_1 = this.sm_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).bm = function () {
    this.sm_1 = this.sm_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).cm = function () {
    this.zl_1 = false;
    this.hm('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.sm_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.hm(this.rm_1.gj_1.yk_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).dm = function () {
    if (this.zl_1)
      this.zl_1 = false;
    else {
      this.cm();
    }
  };
  protoOf(ComposerWithPrettyPrint).em = function () {
    this.fm(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.um_1 = !descriptor.kb(index) ? descriptor.jb(index).va() : false;
    return $this.um_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.tm_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.um_1 = false;
  }
  protoOf(JsonElementMarker).nf = function (index) {
    this.tm_1.nf(index);
  };
  protoOf(JsonElementMarker).of = function () {
    return this.tm_1.of();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.vm('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.vj_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.wm('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.bb() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.cb() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.hb(name);
    if (!(index === -3))
      return index;
    if (!json.gj_1.dl_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.bb() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.gb(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.cb(), CLASS_getInstance()) ? json.gj_1.el_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.ym(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.gj_1.fl_1 ? equals(descriptor.cb(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).s1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.ym(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.eb();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.ib(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.p();
        while (tmp0_iterator.q()) {
          var element = tmp0_iterator.r();
          if (element instanceof JsonNames) {
            destination.m(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zm_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.gb(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.an(_this__u8e3s4, i, _this__u8e3s4.gb(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.v()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.cb(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).q1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.gb(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.gb(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.n1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.eb();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.gb(tmp_2);
        tmp_1[tmp_2] = $strategy.an($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.dn_1, 2);
    $this.bn_1 = copyOf($this.bn_1, newSize);
    $this.cn_1 = copyOf_0($this.cn_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.bn_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.cn_1 = tmp_2;
    this.dn_1 = -1;
  }
  protoOf(JsonPath).en = function (sd) {
    this.dn_1 = this.dn_1 + 1 | 0;
    var depth = this.dn_1;
    if (depth === this.bn_1.length) {
      resize(this);
    }
    this.bn_1[depth] = sd;
  };
  protoOf(JsonPath).fn = function (index) {
    this.cn_1[this.dn_1] = index;
  };
  protoOf(JsonPath).gn = function (key) {
    var tmp;
    if (!(this.cn_1[this.dn_1] === -2)) {
      this.dn_1 = this.dn_1 + 1 | 0;
      tmp = this.dn_1 === this.bn_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.bn_1[this.dn_1] = key;
    this.cn_1[this.dn_1] = -2;
  };
  protoOf(JsonPath).hn = function () {
    if (this.cn_1[this.dn_1] === -2) {
      this.bn_1[this.dn_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).in = function () {
    var depth = this.dn_1;
    if (this.cn_1[depth] === -2) {
      this.cn_1[depth] = -1;
      this.dn_1 = this.dn_1 - 1 | 0;
    }
    if (!(this.dn_1 === -1)) {
      this.dn_1 = this.dn_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).jn = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.g4('$');
    // Inline function 'kotlin.repeat' call
    var times = this.dn_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.bn_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.cb(), LIST_getInstance())) {
            if (!(this.cn_1[index] === -1)) {
              this_0.g4('[');
              this_0.b6(this.cn_1[index]);
              this_0.g4(']');
            }
          } else {
            var idx = this.cn_1[index];
            if (idx >= 0) {
              this_0.g4('.');
              this_0.g4(element.gb(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.g4('[');
            this_0.g4("'");
            this_0.f4(element);
            this_0.g4("'");
            this_0.g4(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.jn();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().s();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.wd(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.sn_1.wn(get_TC_BEGIN_OBJ());
    if ($this.sn_1.xn() === get_TC_COMMA()) {
      $this.sn_1.wm('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.sn_1.yn()) {
      var key = $this.tn_1 ? $this.sn_1.ao() : $this.sn_1.zn();
      $this.sn_1.wn(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.bo();
      // Inline function 'kotlin.collections.set' call
      result.n1(key, element);
      lastToken = $this.sn_1.co();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.sn_1.wm('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.sn_1.wn(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.un_1) {
        invalidTrailingComma($this.sn_1);
      }
      $this.sn_1.wn(get_TC_END_OBJ());
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.v7_1 = Unit_instance;
    tmp.w7_1 = null;
    return tmp.e8();
  }
  function readArray($this) {
    var lastToken = $this.sn_1.co();
    if ($this.sn_1.xn() === get_TC_COMMA()) {
      $this.sn_1.wm('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.sn_1.yn()) {
      var element = $this.bo();
      result.m(element);
      lastToken = $this.sn_1.co();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.sn_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.vj_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.wm(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.sn_1.wn(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.un_1) {
        invalidTrailingComma($this.sn_1, 'array');
      }
      $this.sn_1.wn(get_TC_END_LIST());
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.tn_1 ? true : !isString) {
      tmp = $this.sn_1.ao();
    } else {
      tmp = $this.sn_1.zn();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.zo_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ep = function ($this$$receiver, it, $completion) {
    var tmp = this.fp($this$$receiver, it, $completion);
    tmp.v7_1 = Unit_instance;
    tmp.w7_1 = null;
    return tmp.e8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ia = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.ep(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e8 = function () {
    var suspendResult = this.v7_1;
    $sm: do
      try {
        var tmp = this.t7_1;
        switch (tmp) {
          case 0:
            this.u7_1 = 3;
            this.cp_1 = this.zo_1.sn_1.xn();
            if (this.cp_1 === get_TC_STRING()) {
              this.dp_1 = readValue(this.zo_1, true);
              this.t7_1 = 2;
              continue $sm;
            } else {
              if (this.cp_1 === get_TC_OTHER()) {
                this.dp_1 = readValue(this.zo_1, false);
                this.t7_1 = 2;
                continue $sm;
              } else {
                if (this.cp_1 === get_TC_BEGIN_OBJ()) {
                  this.t7_1 = 1;
                  suspendResult = readObject_0(this.ap_1, this.zo_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.cp_1 === get_TC_BEGIN_LIST()) {
                    this.dp_1 = readArray(this.zo_1);
                    this.t7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.zo_1.sn_1.wm("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.dp_1 = suspendResult;
            this.t7_1 = 2;
            continue $sm;
          case 2:
            return this.dp_1;
          case 3:
            throw this.w7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u7_1 === 3) {
          throw e;
        } else {
          this.t7_1 = this.u7_1;
          this.w7_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).fp = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.zo_1, completion);
    i.ap_1 = $this$$receiver;
    i.bp_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.ep($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lo_1 = _this__u8e3s4;
    this.mo_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).e8 = function () {
    var suspendResult = this.v7_1;
    $sm: do
      try {
        var tmp = this.t7_1;
        switch (tmp) {
          case 0:
            this.u7_1 = 5;
            var tmp_0 = this;
            tmp_0.no_1 = this.lo_1;
            this.oo_1 = this.no_1.sn_1.wn(get_TC_BEGIN_OBJ());
            if (this.no_1.sn_1.xn() === get_TC_COMMA()) {
              this.no_1.sn_1.wm('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.po_1 = LinkedHashMap_init_$Create$();
            this.t7_1 = 1;
            continue $sm;
          case 1:
            if (!this.no_1.sn_1.yn()) {
              this.t7_1 = 4;
              continue $sm;
            }

            this.qo_1 = this.no_1.tn_1 ? this.no_1.sn_1.ao() : this.no_1.sn_1.zn();
            this.no_1.sn_1.wn(get_TC_COLON());
            this.t7_1 = 2;
            suspendResult = this.mo_1.aa(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.po_1;
            var key = this.qo_1;
            this_0.n1(key, element);
            this.oo_1 = this.no_1.sn_1.co();
            var tmp0_subject = this.oo_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.t7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.t7_1 = 4;
                continue $sm;
              } else {
                this.no_1.sn_1.wm('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.t7_1 = 1;
            continue $sm;
          case 4:
            if (this.oo_1 === get_TC_BEGIN_OBJ()) {
              this.no_1.sn_1.wn(get_TC_END_OBJ());
            } else if (this.oo_1 === get_TC_COMMA()) {
              if (!this.no_1.un_1) {
                invalidTrailingComma(this.no_1.sn_1);
              }
              this.no_1.sn_1.wn(get_TC_END_OBJ());
            }

            return new JsonObject(this.po_1);
          case 5:
            throw this.w7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u7_1 === 5) {
          throw e;
        } else {
          this.t7_1 = this.u7_1;
          this.w7_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.sn_1 = lexer;
    this.tn_1 = configuration.uk_1;
    this.un_1 = configuration.gl_1;
    this.vn_1 = 0;
  }
  protoOf(JsonTreeReader).bo = function () {
    var token = this.sn_1.xn();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.vn_1 = this.vn_1 + 1 | 0;
      if (this.vn_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.vn_1 = this.vn_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.sn_1.wm('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.fb().p();
    while (tmp0_iterator.q()) {
      var annotation = tmp0_iterator.r();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.gp_1;
    }
    return json.gj_1.bl_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.il().gj_1.al_1;
    }
    if (tmp) {
      return deserializer.qa(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.oa(), _this__u8e3s4.il());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.jl();
    var descriptor = deserializer.oa();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.bb() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.ml(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp_0;
    try {
      tmp_0 = findPolymorphicSerializer(deserializer, _this__u8e3s4, type);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof SerializationException) {
        var it = $p;
        throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
      } else {
        throw $p;
      }
    }
    var tmp_2 = tmp_0;
    var actualSerializer = isInterface(tmp_2, DeserializationStrategy) ? tmp_2 : THROW_CCE();
    return readPolymorphicJson(_this__u8e3s4.il(), discriminator, jsonTree, actualSerializer);
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.oa()).t(classDiscriminator)) {
      var baseName = serializer.oa().bb();
      var actualName = actualSerializer.oa().bb();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.cb();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.t4() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.hp_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.t4() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.eb();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.gb(i);
        if (name === $this.ip_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.hp_1 = useArrayPolymorphism;
    this.ip_1 = discriminator;
  }
  protoOf(PolymorphismValidator).aj = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).dj = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.oa();
    checkKind_0(this, descriptor, actualClass);
    if (!this.hp_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).ej = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).fj = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.xm_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).jp = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.xm_1;
    var value_0 = this_0.s1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.n1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.n1(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).ym = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.kp(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.jp(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).kp = function (descriptor, key) {
    var tmp0_safe_receiver = this.xm_1.s1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.s1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.lp_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.lp_1 === unknownKey) {
      _this__u8e3s4.lp_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.hd(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.pj_1.xn() === get_TC_COMMA()) {
      $this.pj_1.wm('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.rj_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.rj_1 === -1)) {
        hasComma = $this.pj_1.np();
      }
    } else {
      $this.pj_1.mp(get_COLON());
    }
    var tmp;
    if ($this.pj_1.yn()) {
      if (decodingKey) {
        if ($this.rj_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.pj_1;
          var condition = !hasComma;
          var position = this_0.vj_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            this_0.wm(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.pj_1;
          var condition_0 = hasComma;
          var position_0 = this_1.vj_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.wm(tmp$ret$1, position_0);
          }
        }
      }
      $this.rj_1 = $this.rj_1 + 1 | 0;
      tmp = $this.rj_1;
    } else {
      if (hasComma ? !$this.nj_1.gj_1.gl_1 : false) {
        invalidTrailingComma($this.pj_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.nj_1;
      if (!descriptor.kb(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.jb(index);
      var tmp;
      if (!elementDescriptor.va()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.pj_1.op(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.cb(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.va()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.pj_1.op(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.pj_1.pp($this.tj_1.uk_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_3;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.pj_1.zn();
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.pj_1.np();
    while ($this.pj_1.yn()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.pj_1.mp(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.nj_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.tj_1.zk_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.pj_1.np();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.uj_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.nf(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma ? !$this.nj_1.gj_1.gl_1 : false) {
      invalidTrailingComma($this.pj_1);
    }
    var tmp1_safe_receiver = $this.uj_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.of();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.tj_1.tk_1 ? true : trySkip($this.sj_1, $this, key)) {
      $this.pj_1.rp($this.tj_1.uk_1);
    } else {
      $this.pj_1.qp(key);
    }
    return $this.pj_1.np();
  }
  function decodeListIndex($this) {
    var hasComma = $this.pj_1.np();
    var tmp;
    if ($this.pj_1.yn()) {
      if (!($this.rj_1 === -1) ? !hasComma : false) {
        $this.pj_1.wm('Expected end of the array or comma');
      }
      $this.rj_1 = $this.rj_1 + 1 | 0;
      tmp = $this.rj_1;
    } else {
      if (hasComma ? !$this.nj_1.gj_1.gl_1 : false) {
        invalidTrailingComma($this.pj_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.tj_1.uk_1) {
      tmp = $this.pj_1.tp();
    } else {
      tmp = $this.pj_1.sp();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.nj_1 = json;
    this.oj_1 = mode;
    this.pj_1 = lexer;
    this.qj_1 = this.nj_1.fd();
    this.rj_1 = -1;
    this.sj_1 = discriminatorHolder;
    this.tj_1 = this.nj_1.gj_1;
    this.uj_1 = this.tj_1.xk_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).il = function () {
    return this.nj_1;
  };
  protoOf(StreamingJsonDecoder).fd = function () {
    return this.qj_1;
  };
  protoOf(StreamingJsonDecoder).jl = function () {
    return (new JsonTreeReader(this.nj_1.gj_1, this.pj_1)).bo();
  };
  protoOf(StreamingJsonDecoder).vc = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.nj_1.gj_1.al_1;
      }
      if (tmp) {
        return deserializer.qa(this);
      }
      var discriminator = classDiscriminator(deserializer.oa(), this.nj_1);
      var tmp0_elvis_lhs = this.pj_1.up(discriminator, this.tj_1.uk_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type = tmp_0;
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it.message), _Char___init__impl__6a9atx(10), '');
          this.pj_1.wm(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp_3 = tmp_1;
      var actualSerializer = isInterface(tmp_3, DeserializationStrategy) ? tmp_3 : THROW_CCE();
      this.sj_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer.qa(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.ua_1, plus(e.message, ' at path: ') + this.pj_1.wj_1.jn(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).wc = function (descriptor) {
    var newMode = switchMode(this.nj_1, descriptor);
    this.pj_1.wj_1.en(descriptor);
    this.pj_1.mp(newMode.xp_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.w6_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.nj_1, newMode, this.pj_1, descriptor, this.sj_1);
        break;
      default:
        var tmp_0;
        if (this.oj_1.equals(newMode) ? this.nj_1.gj_1.xk_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.nj_1, newMode, this.pj_1, descriptor, this.sj_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xc = function (descriptor) {
    if (this.nj_1.gj_1.tk_1 ? descriptor.eb() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.pj_1.np() ? !this.nj_1.gj_1.gl_1 : false) {
      invalidTrailingComma(this.pj_1, '');
    }
    this.pj_1.mp(this.oj_1.yp_1);
    this.pj_1.wj_1.in();
  };
  protoOf(StreamingJsonDecoder).nc = function () {
    var tmp;
    var tmp0_safe_receiver = this.uj_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.um_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.pj_1.zp();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).oc = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).cd = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.oj_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.pj_1.wj_1.hn();
    }
    var value = protoOf(AbstractDecoder).cd.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.pj_1.wj_1.gn(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).hd = function (descriptor) {
    var index;
    switch (this.oj_1.w6_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.oj_1.equals(WriteMode_MAP_getInstance())) {
      this.pj_1.wj_1.fn(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).pc = function () {
    return this.pj_1.aq();
  };
  protoOf(StreamingJsonDecoder).qc = function () {
    var value = this.pj_1.vl();
    if (!value.equals(toLong(value.j6()))) {
      this.pj_1.wm("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.j6();
  };
  protoOf(StreamingJsonDecoder).rc = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.pj_1;
      var input = this_0.ao();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.wm("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.nj_1.gj_1.cl_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.pj_1, result);
  };
  protoOf(StreamingJsonDecoder).sc = function () {
    var tmp;
    if (this.tj_1.uk_1) {
      tmp = this.pj_1.tp();
    } else {
      tmp = this.pj_1.zn();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).tc = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.nj_1, this.sc(), ' at path ' + this.pj_1.wj_1.jn());
  };
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.kn_1.cm();
    $this.pd(ensureNotNull($this.rn_1));
    $this.kn_1.fm(get_COLON());
    $this.kn_1.em();
    $this.pd(descriptor.bb());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.kn_1 = composer;
    this.ln_1 = json;
    this.mn_1 = mode;
    this.nn_1 = modeReuseCache;
    this.on_1 = this.ln_1.fd();
    this.pn_1 = this.ln_1.gj_1;
    this.qn_1 = false;
    this.rn_1 = null;
    var i = this.mn_1.w6_1;
    if (!(this.nn_1 == null)) {
      if (!(this.nn_1[i] === null) ? true : !(this.nn_1[i] === this)) {
        this.nn_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).il = function () {
    return this.ln_1;
  };
  protoOf(StreamingJsonEncoder).fd = function () {
    return this.on_1;
  };
  protoOf(StreamingJsonEncoder).be = function (descriptor, index) {
    return this.pn_1.sk_1;
  };
  protoOf(StreamingJsonEncoder).wd = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.il().gj_1.al_1) {
        serializer.pa(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.il().gj_1.hl_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.il().gj_1.hl_1.w6_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.oa().cb();
            tmp_0 = equals(it, CLASS_getInstance()) ? true : equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.oa(), this.il()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + serializer.oa() + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          validateIfSealed$accessor$1ad0flx(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.oa().cb());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        this.rn_1 = baseClassDiscriminator;
      }
      actualSerializer.pa(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).wc = function (descriptor) {
    var newMode = switchMode(this.ln_1, descriptor);
    if (!(newMode.xp_1 === get_INVALID())) {
      this.kn_1.fm(newMode.xp_1);
      this.kn_1.am();
    }
    if (!(this.rn_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.rn_1 = null;
    }
    if (this.mn_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.nn_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.w6_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.kn_1, this.ln_1, newMode, this.nn_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).xc = function (descriptor) {
    if (!(this.mn_1.yp_1 === get_INVALID())) {
      this.kn_1.bm();
      this.kn_1.dm();
      this.kn_1.fm(this.mn_1.yp_1);
    }
  };
  protoOf(StreamingJsonEncoder).jd = function (descriptor, index) {
    switch (this.mn_1.w6_1) {
      case 1:
        if (!this.kn_1.zl_1) {
          this.kn_1.fm(get_COMMA());
        }

        this.kn_1.cm();
        break;
      case 2:
        if (!this.kn_1.zl_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.kn_1.fm(get_COMMA());
            this.kn_1.cm();
            tmp_0 = true;
          } else {
            this.kn_1.fm(get_COLON());
            this.kn_1.em();
            tmp_0 = false;
          }
          tmp.qn_1 = tmp_0;
        } else {
          this.qn_1 = true;
          this.kn_1.cm();
        }

        break;
      case 3:
        if (index === 0)
          this.qn_1 = true;
        if (index === 1) {
          this.kn_1.fm(get_COMMA());
          this.kn_1.em();
          this.qn_1 = false;
        }

        break;
      default:
        if (!this.kn_1.zl_1) {
          this.kn_1.fm(get_COMMA());
        }

        this.kn_1.cm();
        this.pd(getJsonElementName(descriptor, this.ln_1, index));
        this.kn_1.fm(get_COLON());
        this.kn_1.em();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).xd = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.pn_1.xk_1) {
      protoOf(AbstractEncoder).xd.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).ld = function () {
    this.kn_1.hm(get_NULL());
  };
  protoOf(StreamingJsonEncoder).md = function (value) {
    if (this.qn_1) {
      this.pd(value.toString());
    } else {
      this.kn_1.mm(value);
    }
  };
  protoOf(StreamingJsonEncoder).nd = function (value) {
    if (this.qn_1) {
      this.pd(value.toString());
    } else {
      this.kn_1.km(value);
    }
  };
  protoOf(StreamingJsonEncoder).od = function (value) {
    if (this.qn_1) {
      this.pd(value.toString());
    } else {
      this.kn_1.jm(value);
    }
    if (!this.pn_1.cl_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.kn_1.yl_1));
    }
  };
  protoOf(StreamingJsonEncoder).pd = function (value) {
    return this.kn_1.nm(value);
  };
  protoOf(StreamingJsonEncoder).qd = function (enumDescriptor, index) {
    this.pd(enumDescriptor.gb(index));
  };
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.h4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.z5(value, lastPos, i);
          _this__u8e3s4.g4(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.z5(value, lastPos, value.length);
    } else {
      _this__u8e3s4.g4(value);
    }
    _this__u8e3s4.h4(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.gq()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.dq_1 = json;
    this.eq_1 = value;
    this.fq_1 = this.il().gj_1;
  }
  protoOf(AbstractJsonTreeDecoder).il = function () {
    return this.dq_1;
  };
  protoOf(AbstractJsonTreeDecoder).k4 = function () {
    return this.eq_1;
  };
  protoOf(AbstractJsonTreeDecoder).fd = function () {
    return this.il().fd();
  };
  protoOf(AbstractJsonTreeDecoder).gq = function () {
    var tmp0_safe_receiver = this.gi();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.hq(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.k4() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).jl = function () {
    return this.gq();
  };
  protoOf(AbstractJsonTreeDecoder).vc = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).hi = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).wc = function (descriptor) {
    var currentObject = this.gq();
    var tmp0_subject = descriptor.cb();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.il();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.bb() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.il();
        var keyDescriptor = carrierDescriptor(descriptor.jb(0), this_0.fd());
        var keyKind = keyDescriptor.cb();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.il();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.bb() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.gj_1.vk_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.il();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.bb() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.il();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.bb() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).xc = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).nc = function () {
    var tmp = this.gq();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).iq = function (tag) {
    var currentElement = this.hq(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.gq()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).jq = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.il(), this.iq(tag).pl());
  };
  protoOf(AbstractJsonTreeDecoder).oi = function (tag, enumDescriptor) {
    return this.jq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).kq = function (tag) {
    return !(this.hq(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).ji = function (tag) {
    return this.kq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).lq = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.iq(tag);
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).ki = function (tag) {
    return this.lq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).mq = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.iq(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).li = function (tag) {
    return this.mq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).nq = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.iq(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.il().gj_1.cl_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.gq()));
  };
  protoOf(AbstractJsonTreeDecoder).mi = function (tag) {
    return this.nq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).oq = function (tag) {
    var value = this.iq(tag);
    if (!this.il().gj_1.uk_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.ql_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.gq()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.gq()));
    return value.pl();
  };
  protoOf(AbstractJsonTreeDecoder).ni = function (tag) {
    return this.oq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.il();
      if (!descriptor.kb(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.jb(index);
      var tmp;
      if (!elementDescriptor.va()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.hq(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.cb(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.va()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.hq(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.hq(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_3;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.yq_1 = (!$this.il().gj_1.xk_1 ? !descriptor.kb(index) : false) ? descriptor.jb(index).va() : false;
    return $this.yq_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.uq_1 = value;
    this.vq_1 = polyDiscriminator;
    this.wq_1 = polyDescriptor;
    this.xq_1 = 0;
    this.yq_1 = false;
  }
  protoOf(JsonTreeDecoder).k4 = function () {
    return this.uq_1;
  };
  protoOf(JsonTreeDecoder).hd = function (descriptor) {
    while (this.xq_1 < descriptor.eb()) {
      var tmp1 = this.xq_1;
      this.xq_1 = tmp1 + 1 | 0;
      var name = this.bi(descriptor, tmp1);
      var index = this.xq_1 - 1 | 0;
      this.yq_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.k4();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).q1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.fq_1.zk_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).nc = function () {
    return !this.yq_1 ? protoOf(AbstractJsonTreeDecoder).nc.call(this) : false;
  };
  protoOf(JsonTreeDecoder).ci = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.il());
    var baseName = descriptor.gb(index);
    if (strategy == null) {
      if (!this.fq_1.dl_1)
        return baseName;
      if (this.k4().m1().t(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.il(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.k4().m1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.p();
      while (tmp0_iterator.q()) {
        var element = tmp0_iterator.r();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.s1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.an(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).hq = function (tag) {
    return getValue(this.k4(), tag);
  };
  protoOf(JsonTreeDecoder).wc = function (descriptor) {
    if (descriptor === this.wq_1) {
      var tmp = this.il();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.gq();
      var descriptor_0 = this.wq_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.bb() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.vq_1, this.wq_1);
    }
    return protoOf(AbstractJsonTreeDecoder).wc.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).xc = function (descriptor) {
    var tmp;
    if (this.fq_1.tk_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.cb();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.il());
    var tmp_1;
    if (strategy == null ? !this.fq_1.dl_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.il(), descriptor).m1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.il()).kp(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.k4().m1().p();
    while (tmp1_iterator.q()) {
      var key = tmp1_iterator.r();
      if (!names.t(key) ? !(key === this.vq_1) : false) {
        throw UnknownKeyException(key, this.k4().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.er_1 = value;
    this.fr_1 = this.er_1.s();
    this.gr_1 = -1;
  }
  protoOf(JsonTreeListDecoder).k4 = function () {
    return this.er_1;
  };
  protoOf(JsonTreeListDecoder).ci = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).hq = function (tag) {
    return this.er_1.z(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).hd = function (descriptor) {
    while (this.gr_1 < (this.fr_1 - 1 | 0)) {
      this.gr_1 = this.gr_1 + 1 | 0;
      return this.gr_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.rr_1 = value;
    this.sr_1 = toList(this.rr_1.m1());
    this.tr_1 = imul(this.sr_1.s(), 2);
    this.ur_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).k4 = function () {
    return this.rr_1;
  };
  protoOf(JsonTreeMapDecoder).ci = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.sr_1.z(i);
  };
  protoOf(JsonTreeMapDecoder).hd = function (descriptor) {
    while (this.ur_1 < (this.tr_1 - 1 | 0)) {
      this.ur_1 = this.ur_1 + 1 | 0;
      return this.ur_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).hq = function (tag) {
    return (this.ur_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.rr_1, tag);
  };
  protoOf(JsonTreeMapDecoder).xc = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.oa())).vc(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.xp_1 = begin;
    this.yp_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.cb();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.jb(0), _this__u8e3s4.fd());
          var keyKind = keyDescriptor.cb();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.gj_1.vk_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.cb(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.db()) {
      tmp = carrierDescriptor(_this__u8e3s4.jb(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.vr(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.vr(lastPosition, currentPosition);
    var result = $this.yj_1.toString();
    $this.yj_1.d6(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.xj_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.xj_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.wr(), $this.vj_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.xr(currentPosition);
    if (currentPosition === -1) {
      $this.wm('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.wr();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.wr(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.wm("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.yj_1.h4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.vj_1 = startPos;
      $this.yr();
      if (($this.vj_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.wm('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.vj_1);
    }
    $this.yj_1.h4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.wm("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.xr(start);
    if (current >= charSequenceLength($this.wr()) ? true : current === -1) {
      $this.wm('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.wr();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var this_0 = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.wm("Expected valid boolean literal prefix, but had '" + $this.ao() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.wr()) - current | 0) < literalSuffix.length) {
      $this.wm('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.wr(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.wm("Expected valid boolean literal prefix, but had '" + $this.ao() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.vj_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.d7();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.d7();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.vj_1 = 0;
    this.wj_1 = new JsonPath();
    this.xj_1 = null;
    this.yj_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).yr = function () {
  };
  protoOf(AbstractJsonLexer).zr = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).zj = function () {
    var nextToken = this.co();
    if (!(nextToken === 10)) {
      this.wm('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.wr(), this.vj_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).wn = function (expected) {
    var token = this.co();
    if (!(token === expected)) {
      this.as(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).mp = function (expected) {
    this.yr();
    var source = this.wr();
    var cpos = this.vj_1;
    $l$loop_0: while (true) {
      cpos = this.xr(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.vj_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.bs(expected);
    }
    this.vj_1 = cpos;
    this.bs(expected);
  };
  protoOf(AbstractJsonLexer).bs = function (expected) {
    if (this.vj_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.vj_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.vj_1 = this.vj_1 - 1 | 0;
          tmp$ret$1 = this.ao();
          break $l$block;
        }finally {
          this.vj_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.vm("Expected string literal but 'null' literal was found", this.vj_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.as(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).cs = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.vj_1 - 1 | 0 : this.vj_1;
    var s = (this.vj_1 === charSequenceLength(this.wr()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.wr(), position));
    this.wm('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).as = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.cs(expectedToken, wasConsumed) : $super.cs.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).xn = function () {
    var source = this.wr();
    var cpos = this.vj_1;
    $l$loop_0: while (true) {
      cpos = this.xr(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.vj_1 = cpos;
      return charToTokenClass(ch);
    }
    this.vj_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).op = function (doConsume) {
    var current = this.ds();
    current = this.xr(current);
    var len = charSequenceLength(this.wr()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.wr(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.wr(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.vj_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).zp = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.op(doConsume) : $super.op.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).ds = function () {
    var current = this.vj_1;
    $l$loop_0: while (true) {
      current = this.xr(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.wr(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.vj_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).pp = function (isLenient) {
    var token = this.xn();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.ao();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.zn();
    }
    var string = tmp;
    this.xj_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).es = function () {
    this.xj_1 = null;
  };
  protoOf(AbstractJsonLexer).fs = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.wr();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).zn = function () {
    if (!(this.xj_1 == null)) {
      return takePeeked(this);
    }
    return this.sp();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.xr(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.wm('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.vr(lastPosition, currentPosition);
          currentPosition = this.xr(currentPosition);
          if (currentPosition === -1) {
            this.wm('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.fs(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.vj_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).tp = function () {
    var result = this.ao();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.wm("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).ao = function () {
    if (!(this.xj_1 == null)) {
      return takePeeked(this);
    }
    var current = this.ds();
    if (current >= charSequenceLength(this.wr()) ? true : current === -1) {
      this.wm('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.wr(), current));
    if (token === 1) {
      return this.zn();
    }
    if (!(token === 0)) {
      this.wm('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.wr(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.wr(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.wr())) {
        usedAppend = true;
        this.vr(this.vj_1, current);
        var eof = this.xr(current);
        if (eof === -1) {
          this.vj_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.fs(this.vj_1, current);
    } else {
      tmp = decodedString(this, this.vj_1, current);
    }
    var result = tmp;
    this.vj_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).vr = function (fromIndex, toIndex) {
    this.yj_1.z5(this.wr(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).rp = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.xn();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.ao();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.xn();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.ao();
        } else {
          this.sp();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.m(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.vj_1, 'found ] instead of } at path: ' + this.wj_1, this.wr());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.vj_1, 'found } instead of ] at path: ' + this.wj_1, this.wr());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.wm('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.co();
      if (tokenStack.s() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.wr() + "', currentPosition=" + this.vj_1 + ')';
  };
  protoOf(AbstractJsonLexer).qp = function (key) {
    var processed = this.fs(0, this.vj_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.vm("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).vm = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.wj_1.jn() + hintMessage, this.wr());
  };
  protoOf(AbstractJsonLexer).wm = function (message, position, hint, $super) {
    position = position === VOID ? this.vj_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.vm(message, position, hint) : $super.vm.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).vl = function () {
    var current = this.ds();
    current = this.xr(current);
    if (current >= charSequenceLength(this.wr()) ? true : current === -1) {
      this.wm('EOF');
    }
    var tmp;
    if (charSequenceGet(this.wr(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.wr())) {
        this.wm('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.wr()))) {
      var ch = charSequenceGet(this.wr(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.wm('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.wm("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.wm("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.wm("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.wm("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.k7(toLong(10)).i7(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.k7(toLong(10)).j7(toLong(digit));
      if (accumulator.k6(new Long(0, 0)) > 0) {
        this.wm('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.wm('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.wm('EOF');
      }
      if (!(charSequenceGet(this.wr(), current) === _Char___init__impl__6a9atx(34))) {
        this.wm('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.vj_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.d7() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance();
      if (doubleAccumulator > (new Long(-1, 2147483647)).d7()) {
        tmp_0 = true;
      } else {
        Companion_getInstance();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).d7();
      }
      if (tmp_0) {
        this.wm('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.wm("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.m7();
      } else {
        this.wm('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).aq = function () {
    var current = this.ds();
    if (current === charSequenceLength(this.wr())) {
      this.wm('EOF');
    }
    var tmp;
    if (charSequenceGet(this.wr(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.vj_1 === charSequenceLength(this.wr())) {
        this.wm('EOF');
      }
      if (!(charSequenceGet(this.wr(), this.vj_1) === _Char___init__impl__6a9atx(34))) {
        this.wm('Expected closing quotation mark');
      }
      this.vj_1 = this.vj_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().hs_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().gs_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.gs_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.hs_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.gs_1 = charArray(117);
    this.hs_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.ms_1 = source;
  }
  protoOf(StringJsonLexer).wr = function () {
    return this.ms_1;
  };
  protoOf(StringJsonLexer).xr = function (position) {
    return position < this.ms_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).co = function () {
    var source = this.ms_1;
    $l$loop: while (!(this.vj_1 === -1) ? this.vj_1 < source.length : false) {
      var tmp1 = this.vj_1;
      this.vj_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).np = function () {
    var current = this.ds();
    if (current === this.ms_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.ms_1, current) === _Char___init__impl__6a9atx(44)) {
      this.vj_1 = this.vj_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).yn = function () {
    var current = this.vj_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.ms_1.length) {
      var c = charSequenceGet(this.ms_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.vj_1 = current;
      return this.zr(c);
    }
    this.vj_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).ds = function () {
    var current = this.vj_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.ms_1.length) {
      var c = charSequenceGet(this.ms_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.vj_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).mp = function (expected) {
    if (this.vj_1 === -1) {
      this.bs(expected);
    }
    var source = this.ms_1;
    $l$loop: while (this.vj_1 < source.length) {
      var tmp1 = this.vj_1;
      this.vj_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.bs(expected);
    }
    this.vj_1 = -1;
    this.bs(expected);
  };
  protoOf(StringJsonLexer).sp = function () {
    this.mp(get_STRING());
    var current = this.vj_1;
    var closingQuote = indexOf(this.ms_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.ao();
      this.cs(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.ms_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.ms_1, this.vj_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.vj_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.ms_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).up = function (keyToMatch, isLenient) {
    var positionSnapshot = this.vj_1;
    try {
      if (!(this.co() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.pp(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.es();
      if (!(this.co() === get_TC_COLON()))
        return null;
      return this.pp(isLenient);
    }finally {
      this.vj_1 = positionSnapshot;
      this.es();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.ij_1;
  }
  function JsonToStringWriter() {
    this.lj_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).lm = function (value) {
    this.lj_1.c6(value);
  };
  protoOf(JsonToStringWriter).gm = function (char) {
    this.lj_1.h4(char);
  };
  protoOf(JsonToStringWriter).im = function (text) {
    this.lj_1.g4(text);
  };
  protoOf(JsonToStringWriter).om = function (text) {
    printQuoted(this.lj_1, text);
  };
  protoOf(JsonToStringWriter).mj = function () {
    this.lj_1.e6();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.lj_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).cj = contextual;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
