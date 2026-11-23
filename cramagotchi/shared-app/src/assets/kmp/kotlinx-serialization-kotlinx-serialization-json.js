(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var protoOf = kotlin_kotlin.$_$.p3;
  var initMetadataForObject = kotlin_kotlin.$_$.g3;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var initMetadataForClass = kotlin_kotlin.$_$.b3;
  var toString = kotlin_kotlin.$_$.r3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var charSequenceLength = kotlin_kotlin.$_$.r2;
  var charSequenceGet = kotlin_kotlin.$_$.q2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v;
  var equals = kotlin_kotlin.$_$.u2;
  var toString_0 = kotlin_kotlin.$_$.d5;
  var Enum = kotlin_kotlin.$_$.o4;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var initMetadataForInterface = kotlin_kotlin.$_$.e3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.s4;
  var hashCode = kotlin_kotlin.$_$.a3;
  var joinToString = kotlin_kotlin.$_$.t1;
  var KtMap = kotlin_kotlin.$_$.d1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.z4;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.w2;
  var getStringHashCode = kotlin_kotlin.$_$.z2;
  var KtList = kotlin_kotlin.$_$.c1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.u;
  var numberRangeToNumber = kotlin_kotlin.$_$.k3;
  var ClosedRange = kotlin_kotlin.$_$.s3;
  var isInterface = kotlin_kotlin.$_$.i3;
  var contains = kotlin_kotlin.$_$.v3;
  var toDouble = kotlin_kotlin.$_$.j4;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.z;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toLong = kotlin_kotlin.$_$.q3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var captureStack = kotlin_kotlin.$_$.n2;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.s2;
  var coerceAtLeast = kotlin_kotlin.$_$.t3;
  var coerceAtMost = kotlin_kotlin.$_$.u3;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.b2;
  var emptyMap = kotlin_kotlin.$_$.n1;
  var getValue = kotlin_kotlin.$_$.p1;
  var fillArrayVal = kotlin_kotlin.$_$.v2;
  var copyOf = kotlin_kotlin.$_$.j1;
  var copyOf_0 = kotlin_kotlin.$_$.k1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.m4;
  var invoke = kotlin_kotlin.$_$.x4;
  var CoroutineImpl = kotlin_kotlin.$_$.j2;
  var DeepRecursiveScope = kotlin_kotlin.$_$.n4;
  var Unit = kotlin_kotlin.$_$.u4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i2;
  var initMetadataForLambda = kotlin_kotlin.$_$.f3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.d3;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var getKClass = kotlin_kotlin.$_$.b;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var ensureNotNull = kotlin_kotlin.$_$.w4;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var substringBefore = kotlin_kotlin.$_$.i4;
  var removeSuffix = kotlin_kotlin.$_$.f4;
  var substringAfter = kotlin_kotlin.$_$.h4;
  var contains_0 = kotlin_kotlin.$_$.z3;
  var plus = kotlin_kotlin.$_$.c5;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.q4;
  var isFinite = kotlin_kotlin.$_$.y4;
  var objectCreate = kotlin_kotlin.$_$.o3;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b5;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.x;
  var numberToChar = kotlin_kotlin.$_$.l3;
  var equals_0 = kotlin_kotlin.$_$.a4;
  var toString_1 = kotlin_kotlin.$_$.y;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var emptySet = kotlin_kotlin.$_$.o1;
  var plus_0 = kotlin_kotlin.$_$.z1;
  var toInt = kotlin_kotlin.$_$.l4;
  var toList = kotlin_kotlin.$_$.e2;
  var enumEntries = kotlin_kotlin.$_$.k2;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var last = kotlin_kotlin.$_$.x1;
  var removeLast = kotlin_kotlin.$_$.a2;
  var lastIndexOf = kotlin_kotlin.$_$.d4;
  var Long = kotlin_kotlin.$_$.r4;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.w;
  var numberToLong = kotlin_kotlin.$_$.n3;
  var charArray = kotlin_kotlin.$_$.p2;
  var indexOf = kotlin_kotlin.$_$.b4;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap]);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement);
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, VOID, VOID, VOID, {0: JsonNull_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [0]);
  initMetadataForClass(PolymorphismValidator, 'PolymorphismValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
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
    this.hj_1 = configuration;
    this.ij_1 = serializersModule;
    this.jj_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).id = function () {
    return this.ij_1;
  };
  protoOf(Json).kj = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.nj();
    }
  };
  protoOf(Json).lj = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.ra(), null);
    var result = input.yc(deserializer);
    lexer.ak();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.sk();
    return new JsonImpl(conf, builder.rk_1);
  }
  function JsonBuilder(json) {
    this.bk_1 = json.hj_1.tk_1;
    this.ck_1 = json.hj_1.yk_1;
    this.dk_1 = json.hj_1.uk_1;
    this.ek_1 = json.hj_1.vk_1;
    this.fk_1 = json.hj_1.wk_1;
    this.gk_1 = json.hj_1.xk_1;
    this.hk_1 = json.hj_1.zk_1;
    this.ik_1 = json.hj_1.al_1;
    this.jk_1 = json.hj_1.bl_1;
    this.kk_1 = json.hj_1.cl_1;
    this.lk_1 = json.hj_1.il_1;
    this.mk_1 = json.hj_1.dl_1;
    this.nk_1 = json.hj_1.el_1;
    this.ok_1 = json.hj_1.fl_1;
    this.pk_1 = json.hj_1.gl_1;
    this.qk_1 = json.hj_1.hl_1;
    this.rk_1 = json.id();
  }
  protoOf(JsonBuilder).sk = function () {
    if (this.jk_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.kk_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.lk_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.gk_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.hk_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.hk_1 === '    ')) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.hk_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.hk_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.bk_1, this.dk_1, this.ek_1, this.fk_1, this.gk_1, this.ck_1, this.hk_1, this.ik_1, this.jk_1, this.kk_1, this.mk_1, this.nk_1, this.ok_1, this.pk_1, this.qk_1, this.lk_1);
  };
  function validateConfiguration($this) {
    if (equals($this.id(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.hj_1.bl_1, $this.hj_1.cl_1);
    $this.id().ti(collector);
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
    this.tk_1 = encodeDefaults;
    this.uk_1 = ignoreUnknownKeys;
    this.vk_1 = isLenient;
    this.wk_1 = allowStructuredMapKeys;
    this.xk_1 = prettyPrint;
    this.yk_1 = explicitNulls;
    this.zk_1 = prettyPrintIndent;
    this.al_1 = coerceInputValues;
    this.bl_1 = useArrayPolymorphism;
    this.cl_1 = classDiscriminator;
    this.dl_1 = allowSpecialFloatingPointValues;
    this.el_1 = useAlternativeNames;
    this.fl_1 = namingStrategy;
    this.gl_1 = decodeEnumsCaseInsensitive;
    this.hl_1 = allowTrailingComma;
    this.il_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.tk_1 + ', ignoreUnknownKeys=' + this.uk_1 + ', isLenient=' + this.vk_1 + ', ' + ('allowStructuredMapKeys=' + this.wk_1 + ', prettyPrint=' + this.xk_1 + ', explicitNulls=' + this.yk_1 + ', ') + ("prettyPrintIndent='" + this.zk_1 + "', coerceInputValues=" + this.al_1 + ', useArrayPolymorphism=' + this.bl_1 + ', ') + ("classDiscriminator='" + this.cl_1 + "', allowSpecialFloatingPointValues=" + this.dl_1 + ', ') + ('useAlternativeNames=' + this.el_1 + ', namingStrategy=' + toString_0(this.fl_1) + ', decodeEnumsCaseInsensitive=' + this.gl_1 + ', ') + ('allowTrailingComma=' + this.hl_1 + ', classDiscriminatorMode=' + this.il_1.toString() + ')');
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
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.w();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.x();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.m5(_Char___init__impl__6a9atx(58));
    this_0.k5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.ll_1 = content;
  }
  protoOf(JsonObject).b1 = function () {
    return this.ll_1.b1();
  };
  protoOf(JsonObject).a1 = function () {
    return this.ll_1.a1();
  };
  protoOf(JsonObject).h = function () {
    return this.ll_1.h();
  };
  protoOf(JsonObject).ml = function (key) {
    return this.ll_1.y(key);
  };
  protoOf(JsonObject).y = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.ml((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).nl = function (key) {
    return this.ll_1.z(key);
  };
  protoOf(JsonObject).z = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.nl((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k = function () {
    return this.ll_1.k();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.ll_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.ll_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.ll_1.b1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.ol_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pl_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).ql = function () {
    return this.ol_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.ql();
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
    this.rl_1 = isString;
    this.sl_1 = coerceToInlineType;
    this.tl_1 = toString(body);
    if (!(this.sl_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.sl_1.gb()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).ql = function () {
    return this.tl_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.rl_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.tl_1);
      tmp = this_0.toString();
    } else {
      tmp = this.tl_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.rl_1 === other.rl_1))
      return false;
    if (!(this.tl_1 === other.tl_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.rl_1);
    result = imul(31, result) + getStringHashCode(this.tl_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.ul_1 = content;
  }
  protoOf(JsonArray).h = function () {
    return this.ul_1.h();
  };
  protoOf(JsonArray).vl = function (elements) {
    return this.ul_1.v(elements);
  };
  protoOf(JsonArray).v = function (elements) {
    return this.vl(elements);
  };
  protoOf(JsonArray).j = function (index) {
    return this.ul_1.j(index);
  };
  protoOf(JsonArray).k = function () {
    return this.ul_1.k();
  };
  protoOf(JsonArray).e = function () {
    return this.ul_1.e();
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.ul_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.ul_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.ul_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.ql());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.ql())).wl();
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
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.ql() + ' is not an Int');
    return result.q();
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.ql());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.ql();
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
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
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
    this.xl_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).ra = function () {
    return this.xl_1;
  };
  protoOf(JsonNullSerializer).yl = function (encoder, value) {
    verify(encoder);
    encoder.od();
  };
  protoOf(JsonNullSerializer).sa = function (encoder, value) {
    return this.yl(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).ta = function (decoder) {
    verify_0(decoder);
    if (decoder.qc()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.rc();
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
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
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
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.zl_1 = writer;
    this.am_1 = true;
  }
  protoOf(Composer).bm = function () {
    this.am_1 = true;
  };
  protoOf(Composer).cm = function () {
    return Unit_instance;
  };
  protoOf(Composer).dm = function () {
    this.am_1 = false;
  };
  protoOf(Composer).em = function () {
    this.am_1 = false;
  };
  protoOf(Composer).fm = function () {
    return Unit_instance;
  };
  protoOf(Composer).gm = function (v) {
    return this.zl_1.hm(v);
  };
  protoOf(Composer).im = function (v) {
    return this.zl_1.jm(v);
  };
  protoOf(Composer).km = function (v) {
    return this.zl_1.jm(v.toString());
  };
  protoOf(Composer).lm = function (v) {
    return this.zl_1.mm(toLong(v));
  };
  protoOf(Composer).nm = function (v) {
    return this.zl_1.jm(v.toString());
  };
  protoOf(Composer).om = function (value) {
    return this.zl_1.pm(value);
  };
  function Composer_0(sb, json) {
    return json.hj_1.xk_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.sm_1 = json;
    this.tm_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).bm = function () {
    this.am_1 = true;
    this.tm_1 = this.tm_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).cm = function () {
    this.tm_1 = this.tm_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).dm = function () {
    this.am_1 = false;
    this.im('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.tm_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.im(this.sm_1.hj_1.zk_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).em = function () {
    if (this.am_1)
      this.am_1 = false;
    else {
      this.dm();
    }
  };
  protoOf(ComposerWithPrettyPrint).fm = function () {
    this.gm(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.vm_1 = (!descriptor.nb(index) && descriptor.mb(index).ya());
    return $this.vm_1;
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
    tmp.um_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.vm_1 = false;
  }
  protoOf(JsonElementMarker).wm = function (index) {
    this.um_1.of(index);
  };
  protoOf(JsonElementMarker).xm = function () {
    return this.um_1.pf();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.ym('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.wj_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.zm('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.eb() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.fb().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n" + ('Current input: ' + toString(minify(input))));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
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
    var index = _this__u8e3s4.kb(name);
    if (!(index === -3))
      return index;
    if (!json.hj_1.el_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.eb() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.jb(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.fb(), CLASS_getInstance()) ? json.hj_1.fl_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.bn(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.hj_1.gl_1 && equals(descriptor.fb(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).z(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.bn(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.hb();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.lb(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          if (element instanceof JsonNames) {
            destination.i(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cn_1;
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
          tmp_0 = _this__u8e3s4.jb(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.dn(_this__u8e3s4, i, _this__u8e3s4.jb(i));
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
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    if (builder.k()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.fb(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).y(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.jb(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.jb(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.v2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.hb();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.jb(tmp_2);
        tmp_1[tmp_2] = $strategy.dn($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.gn_1, 2);
    $this.en_1 = copyOf($this.en_1, newSize);
    $this.fn_1 = copyOf_0($this.fn_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.en_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.fn_1 = tmp_2;
    this.gn_1 = -1;
  }
  protoOf(JsonPath).hn = function (sd) {
    this.gn_1 = this.gn_1 + 1 | 0;
    var depth = this.gn_1;
    if (depth === this.en_1.length) {
      resize(this);
    }
    this.en_1[depth] = sd;
  };
  protoOf(JsonPath).in = function (index) {
    this.fn_1[this.gn_1] = index;
  };
  protoOf(JsonPath).jn = function (key) {
    var tmp;
    if (!(this.fn_1[this.gn_1] === -2)) {
      this.gn_1 = this.gn_1 + 1 | 0;
      tmp = this.gn_1 === this.en_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.en_1[this.gn_1] = key;
    this.fn_1[this.gn_1] = -2;
  };
  protoOf(JsonPath).kn = function () {
    if (this.fn_1[this.gn_1] === -2) {
      this.en_1[this.gn_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).ln = function () {
    var depth = this.gn_1;
    if (this.fn_1[depth] === -2) {
      this.fn_1[depth] = -1;
      this.gn_1 = this.gn_1 - 1 | 0;
    }
    if (!(this.gn_1 === -1)) {
      this.gn_1 = this.gn_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).mn = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.l5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.gn_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.en_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.fb(), LIST_getInstance())) {
            if (!(this.fn_1[index] === -1)) {
              this_0.l5('[');
              this_0.x7(this.fn_1[index]);
              this_0.l5(']');
            }
          } else {
            var idx = this.fn_1[index];
            if (idx >= 0) {
              this_0.l5('.');
              this_0.l5(element.jb(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.l5('[');
            this_0.l5("'");
            this_0.k5(element);
            this_0.l5("'");
            this_0.l5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.mn();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().h();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.zd(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.vn_1.zn(6);
    if ($this.vn_1.ao() === 4) {
      $this.vn_1.zm('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.vn_1.bo()) {
      var key = $this.wn_1 ? $this.vn_1.do() : $this.vn_1.co();
      $this.vn_1.zn(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.eo();
      // Inline function 'kotlin.collections.set' call
      result.v2(key, element);
      lastToken = $this.vn_1.fo();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.vn_1.zm('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.vn_1.zn(7);
    } else if (lastToken === 4) {
      if (!$this.xn_1) {
        invalidTrailingComma($this.vn_1);
      }
      $this.vn_1.zn(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.b6_1 = Unit_instance;
    tmp.c6_1 = null;
    return tmp.h6();
  }
  function readArray($this) {
    var lastToken = $this.vn_1.fo();
    if ($this.vn_1.ao() === 4) {
      $this.vn_1.zm('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.vn_1.bo()) {
      var element = $this.eo();
      result.i(element);
      lastToken = $this.vn_1.fo();
      if (!(lastToken === 4)) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.vn_1;
        var condition = lastToken === 9;
        var position = this_0.wj_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.zm(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.vn_1.zn(9);
    } else if (lastToken === 4) {
      if (!$this.xn_1) {
        invalidTrailingComma($this.vn_1, 'array');
      }
      $this.vn_1.zn(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.wn_1 || !isString) {
      tmp = $this.vn_1.do();
    } else {
      tmp = $this.vn_1.co();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.cp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).hp = function ($this$$receiver, it, $completion) {
    var tmp = this.ip($this$$receiver, it, $completion);
    tmp.b6_1 = Unit_instance;
    tmp.c6_1 = null;
    return tmp.h6();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).n6 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.hp(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h6 = function () {
    var suspendResult = this.b6_1;
    $sm: do
      try {
        var tmp = this.z5_1;
        switch (tmp) {
          case 0:
            this.a6_1 = 3;
            this.fp_1 = this.cp_1.vn_1.ao();
            if (this.fp_1 === 1) {
              this.gp_1 = readValue(this.cp_1, true);
              this.z5_1 = 2;
              continue $sm;
            } else {
              if (this.fp_1 === 0) {
                this.gp_1 = readValue(this.cp_1, false);
                this.z5_1 = 2;
                continue $sm;
              } else {
                if (this.fp_1 === 6) {
                  this.z5_1 = 1;
                  suspendResult = readObject_0(this.dp_1, this.cp_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.fp_1 === 8) {
                    this.gp_1 = readArray(this.cp_1);
                    this.z5_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.cp_1.vn_1.zm("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.gp_1 = suspendResult;
            this.z5_1 = 2;
            continue $sm;
          case 2:
            return this.gp_1;
          case 3:
            throw this.c6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.a6_1 === 3) {
          throw e;
        } else {
          this.z5_1 = this.a6_1;
          this.c6_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ip = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.cp_1, completion);
    i.dp_1 = $this$$receiver;
    i.ep_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.hp($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oo_1 = _this__u8e3s4;
    this.po_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).h6 = function () {
    var suspendResult = this.b6_1;
    $sm: do
      try {
        var tmp = this.z5_1;
        switch (tmp) {
          case 0:
            this.a6_1 = 5;
            var tmp_0 = this;
            tmp_0.qo_1 = this.oo_1;
            this.ro_1 = this.qo_1.vn_1.zn(6);
            if (this.qo_1.vn_1.ao() === 4) {
              this.qo_1.vn_1.zm('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.so_1 = LinkedHashMap_init_$Create$();
            this.z5_1 = 1;
            continue $sm;
          case 1:
            if (!this.qo_1.vn_1.bo()) {
              this.z5_1 = 4;
              continue $sm;
            }

            this.to_1 = this.qo_1.wn_1 ? this.qo_1.vn_1.do() : this.qo_1.vn_1.co();
            this.qo_1.vn_1.zn(5);
            this.z5_1 = 2;
            suspendResult = this.po_1.ea(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.so_1;
            var key = this.to_1;
            this_0.v2(key, element);
            this.ro_1 = this.qo_1.vn_1.fo();
            var tmp0_subject = this.ro_1;
            if (tmp0_subject === 4) {
              this.z5_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.z5_1 = 4;
                continue $sm;
              } else {
                this.qo_1.vn_1.zm('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.z5_1 = 1;
            continue $sm;
          case 4:
            if (this.ro_1 === 6) {
              this.qo_1.vn_1.zn(7);
            } else if (this.ro_1 === 4) {
              if (!this.qo_1.xn_1) {
                invalidTrailingComma(this.qo_1.vn_1);
              }
              this.qo_1.vn_1.zn(7);
            }

            return new JsonObject(this.so_1);
          case 5:
            throw this.c6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.a6_1 === 5) {
          throw e;
        } else {
          this.z5_1 = this.a6_1;
          this.c6_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.vn_1 = lexer;
    this.wn_1 = configuration.vk_1;
    this.xn_1 = configuration.hl_1;
    this.yn_1 = 0;
  }
  protoOf(JsonTreeReader).eo = function () {
    var token = this.vn_1.ao();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.yn_1 = this.yn_1 + 1 | 0;
      if (this.yn_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.yn_1 = this.yn_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.vn_1.zm('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.ib().e();
    while (tmp0_iterator.f()) {
      var annotation = tmp0_iterator.g();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.jp_1;
    }
    return json.hj_1.cl_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.jl().hj_1.bl_1;
    }
    if (tmp) {
      return deserializer.ta(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.ra(), _this__u8e3s4.jl());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.kl();
    var descriptor = deserializer.ra();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.eb() + ', but had ' + toString(getKClassFromExpression(value)));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.nl(discriminator);
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
    return readPolymorphicJson(_this__u8e3s4.jl(), discriminator, jsonTree, actualSerializer);
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.ra()).u(classDiscriminator)) {
      var baseName = serializer.ra().eb();
      var actualName = actualSerializer.ra().eb();
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
    var kind = descriptor.fb();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.q6() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.kp_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.q6() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.hb();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.jb(i);
        if (name === $this.lp_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.kp_1 = useArrayPolymorphism;
    this.lp_1 = discriminator;
  }
  protoOf(PolymorphismValidator).bj = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).ej = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.ra();
    checkKind_0(this, descriptor, actualClass);
    if (!this.kp_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).fj = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).gj = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.an_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).mp = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.an_1;
    var value_0 = this_0.z(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.v2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.v2(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).bn = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.np(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.mp(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).np = function (descriptor, key) {
    var tmp0_safe_receiver = this.an_1.z(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.z(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.op_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.op_1 === unknownKey) {
      _this__u8e3s4.op_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.kd(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.qj_1.ao() === 4) {
      $this.qj_1.zm('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.sj_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.sj_1 === -1)) {
        hasComma = $this.qj_1.qp();
      }
    } else {
      $this.qj_1.pp(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.qj_1.bo()) {
      if (decodingKey) {
        if ($this.sj_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.qj_1;
          var condition = !hasComma;
          var position = this_0.wj_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            this_0.zm(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.qj_1;
          var condition_0 = hasComma;
          var position_0 = this_1.wj_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.zm(tmp$ret$1, position_0);
          }
        }
      }
      $this.sj_1 = $this.sj_1 + 1 | 0;
      tmp = $this.sj_1;
    } else {
      if (hasComma && !$this.oj_1.hj_1.hl_1) {
        invalidTrailingComma($this.qj_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.oj_1;
      if (!descriptor.nb(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.mb(index);
      var tmp;
      if (!elementDescriptor.ya()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.qj_1.rp(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.fb(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.ya()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.qj_1.rp(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.qj_1.sp($this.uj_1.vk_1);
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
          $this.qj_1.co();
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.qj_1.qp();
    while ($this.qj_1.bo()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.qj_1.pp(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.oj_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.uj_1.al_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.qj_1.qp();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.vj_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.wm(index);
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
    if (hasComma && !$this.oj_1.hj_1.hl_1) {
      invalidTrailingComma($this.qj_1);
    }
    var tmp1_safe_receiver = $this.vj_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xm();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.uj_1.uk_1 || trySkip($this.tj_1, $this, key)) {
      $this.qj_1.up($this.uj_1.vk_1);
    } else {
      $this.qj_1.tp(key);
    }
    return $this.qj_1.qp();
  }
  function decodeListIndex($this) {
    var hasComma = $this.qj_1.qp();
    var tmp;
    if ($this.qj_1.bo()) {
      if (!($this.sj_1 === -1) && !hasComma) {
        $this.qj_1.zm('Expected end of the array or comma');
      }
      $this.sj_1 = $this.sj_1 + 1 | 0;
      tmp = $this.sj_1;
    } else {
      if (hasComma && !$this.oj_1.hj_1.hl_1) {
        invalidTrailingComma($this.qj_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.uj_1.vk_1) {
      tmp = $this.qj_1.wp();
    } else {
      tmp = $this.qj_1.vp();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.oj_1 = json;
    this.pj_1 = mode;
    this.qj_1 = lexer;
    this.rj_1 = this.oj_1.id();
    this.sj_1 = -1;
    this.tj_1 = discriminatorHolder;
    this.uj_1 = this.oj_1.hj_1;
    this.vj_1 = this.uj_1.yk_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).jl = function () {
    return this.oj_1;
  };
  protoOf(StreamingJsonDecoder).id = function () {
    return this.rj_1;
  };
  protoOf(StreamingJsonDecoder).kl = function () {
    return (new JsonTreeReader(this.oj_1.hj_1, this.qj_1)).eo();
  };
  protoOf(StreamingJsonDecoder).yc = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.oj_1.hj_1.bl_1;
      }
      if (tmp) {
        return deserializer.ta(this);
      }
      var discriminator = classDiscriminator(deserializer.ra(), this.oj_1);
      var tmp0_elvis_lhs = this.qj_1.xp(discriminator, this.uj_1.vk_1);
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
          this.qj_1.zm(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp_3 = tmp_1;
      var actualSerializer = isInterface(tmp_3, DeserializationStrategy) ? tmp_3 : THROW_CCE();
      this.tj_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer.ta(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.xa_1, plus(e.message, ' at path: ') + this.qj_1.xj_1.mn(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).zc = function (descriptor) {
    var newMode = switchMode(this.oj_1, descriptor);
    this.qj_1.xj_1.hn(descriptor);
    this.qj_1.pp(newMode.aq_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.d1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.oj_1, newMode, this.qj_1, descriptor, this.tj_1);
        break;
      default:
        var tmp_0;
        if (this.pj_1.equals(newMode) && this.oj_1.hj_1.yk_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.oj_1, newMode, this.qj_1, descriptor, this.tj_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ad = function (descriptor) {
    if (this.oj_1.hj_1.uk_1 && descriptor.hb() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.qj_1.qp() && !this.oj_1.hj_1.hl_1) {
      invalidTrailingComma(this.qj_1, '');
    }
    this.qj_1.pp(this.pj_1.bq_1);
    this.qj_1.xj_1.ln();
  };
  protoOf(StreamingJsonDecoder).qc = function () {
    var tmp;
    var tmp0_safe_receiver = this.vj_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vm_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.qj_1.cq();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).rc = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).fd = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.pj_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.qj_1.xj_1.kn();
    }
    var value = protoOf(AbstractDecoder).fd.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.qj_1.xj_1.jn(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).kd = function (descriptor) {
    var index;
    switch (this.pj_1.d1_1) {
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
    if (!this.pj_1.equals(WriteMode_MAP_getInstance())) {
      this.qj_1.xj_1.in(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).sc = function () {
    return this.qj_1.dq();
  };
  protoOf(StreamingJsonDecoder).tc = function () {
    var value = this.qj_1.wl();
    if (!value.equals(toLong(value.q()))) {
      this.qj_1.zm("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.q();
  };
  protoOf(StreamingJsonDecoder).uc = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.qj_1;
      var input = this_0.do();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.zm("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.oj_1.hj_1.dl_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.qj_1, result);
  };
  protoOf(StreamingJsonDecoder).vc = function () {
    var tmp;
    if (this.uj_1.vk_1) {
      tmp = this.qj_1.wp();
    } else {
      tmp = this.qj_1.co();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).wc = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.oj_1, this.vc(), ' at path ' + this.qj_1.xj_1.mn());
  };
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.nn_1.dm();
    $this.sd(ensureNotNull($this.un_1));
    $this.nn_1.gm(_Char___init__impl__6a9atx(58));
    $this.nn_1.fm();
    $this.sd(descriptor.eb());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.nn_1 = composer;
    this.on_1 = json;
    this.pn_1 = mode;
    this.qn_1 = modeReuseCache;
    this.rn_1 = this.on_1.id();
    this.sn_1 = this.on_1.hj_1;
    this.tn_1 = false;
    this.un_1 = null;
    var i = this.pn_1.d1_1;
    if (!(this.qn_1 == null)) {
      if (!(this.qn_1[i] === null) || !(this.qn_1[i] === this)) {
        this.qn_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).jl = function () {
    return this.on_1;
  };
  protoOf(StreamingJsonEncoder).id = function () {
    return this.rn_1;
  };
  protoOf(StreamingJsonEncoder).ee = function (descriptor, index) {
    return this.sn_1.tk_1;
  };
  protoOf(StreamingJsonEncoder).zd = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.jl().hj_1.bl_1) {
        serializer.sa(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.jl().hj_1.il_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.jl().hj_1.il_1.d1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.ra().fb();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.ra(), this.jl()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.ra()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          validateIfSealed$accessor$1ad0flx(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.ra().fb());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        this.un_1 = baseClassDiscriminator;
      }
      actualSerializer.sa(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).zc = function (descriptor) {
    var newMode = switchMode(this.on_1, descriptor);
    if (!(newMode.aq_1 === _Char___init__impl__6a9atx(0))) {
      this.nn_1.gm(newMode.aq_1);
      this.nn_1.bm();
    }
    if (!(this.un_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.un_1 = null;
    }
    if (this.pn_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.qn_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.d1_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.nn_1, this.on_1, newMode, this.qn_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).ad = function (descriptor) {
    if (!(this.pn_1.bq_1 === _Char___init__impl__6a9atx(0))) {
      this.nn_1.cm();
      this.nn_1.em();
      this.nn_1.gm(this.pn_1.bq_1);
    }
  };
  protoOf(StreamingJsonEncoder).md = function (descriptor, index) {
    switch (this.pn_1.d1_1) {
      case 1:
        if (!this.nn_1.am_1) {
          this.nn_1.gm(_Char___init__impl__6a9atx(44));
        }

        this.nn_1.dm();
        break;
      case 2:
        if (!this.nn_1.am_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.nn_1.gm(_Char___init__impl__6a9atx(44));
            this.nn_1.dm();
            tmp_0 = true;
          } else {
            this.nn_1.gm(_Char___init__impl__6a9atx(58));
            this.nn_1.fm();
            tmp_0 = false;
          }
          tmp.tn_1 = tmp_0;
        } else {
          this.tn_1 = true;
          this.nn_1.dm();
        }

        break;
      case 3:
        if (index === 0)
          this.tn_1 = true;
        if (index === 1) {
          this.nn_1.gm(_Char___init__impl__6a9atx(44));
          this.nn_1.fm();
          this.tn_1 = false;
        }

        break;
      default:
        if (!this.nn_1.am_1) {
          this.nn_1.gm(_Char___init__impl__6a9atx(44));
        }

        this.nn_1.dm();
        this.sd(getJsonElementName(descriptor, this.on_1, index));
        this.nn_1.gm(_Char___init__impl__6a9atx(58));
        this.nn_1.fm();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).ae = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.sn_1.yk_1) {
      protoOf(AbstractEncoder).ae.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).od = function () {
    this.nn_1.im('null');
  };
  protoOf(StreamingJsonEncoder).pd = function (value) {
    if (this.tn_1) {
      this.sd(value.toString());
    } else {
      this.nn_1.nm(value);
    }
  };
  protoOf(StreamingJsonEncoder).qd = function (value) {
    if (this.tn_1) {
      this.sd(value.toString());
    } else {
      this.nn_1.lm(value);
    }
  };
  protoOf(StreamingJsonEncoder).rd = function (value) {
    if (this.tn_1) {
      this.sd(value.toString());
    } else {
      this.nn_1.km(value);
    }
    if (!this.sn_1.dl_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.nn_1.zl_1));
    }
  };
  protoOf(StreamingJsonEncoder).sd = function (value) {
    return this.nn_1.om(value);
  };
  protoOf(StreamingJsonEncoder).td = function (enumDescriptor, index) {
    this.sd(enumDescriptor.jb(index));
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
    _this__u8e3s4.m5(_Char___init__impl__6a9atx(34));
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
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.v7(value, lastPos, i);
          _this__u8e3s4.l5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.v7(value, lastPos, value.length);
    } else {
      _this__u8e3s4.l5(value);
    }
    _this__u8e3s4.m5(_Char___init__impl__6a9atx(34));
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
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
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
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.jq()));
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
    this.gq_1 = json;
    this.hq_1 = value;
    this.iq_1 = this.jl().hj_1;
  }
  protoOf(AbstractJsonTreeDecoder).jl = function () {
    return this.gq_1;
  };
  protoOf(AbstractJsonTreeDecoder).x = function () {
    return this.hq_1;
  };
  protoOf(AbstractJsonTreeDecoder).id = function () {
    return this.jl().id();
  };
  protoOf(AbstractJsonTreeDecoder).jq = function () {
    var tmp0_safe_receiver = this.hi();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.kq(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.x() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).kl = function () {
    return this.jq();
  };
  protoOf(AbstractJsonTreeDecoder).yc = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).ii = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).zc = function (descriptor) {
    var currentObject = this.jq();
    var tmp0_subject = descriptor.fb();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.jl();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.eb() + ', but had ' + toString(getKClassFromExpression(currentObject)));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.jl();
        var keyDescriptor = carrierDescriptor(descriptor.mb(0), this_0.id());
        var keyKind = keyDescriptor.fb();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.jl();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.eb() + ', but had ' + toString(getKClassFromExpression(currentObject)));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.hj_1.wk_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.jl();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.eb() + ', but had ' + toString(getKClassFromExpression(currentObject)));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.jl();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.eb() + ', but had ' + toString(getKClassFromExpression(currentObject)));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).ad = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).qc = function () {
    var tmp = this.jq();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).lq = function (tag) {
    var currentElement = this.kq(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + toString(currentElement), toString(this.jq()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).mq = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.jl(), this.lq(tag).ql());
  };
  protoOf(AbstractJsonTreeDecoder).pi = function (tag, enumDescriptor) {
    return this.mq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).nq = function (tag) {
    return !(this.kq(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).ki = function (tag) {
    return this.nq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).oq = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.lq(tag);
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
  protoOf(AbstractJsonTreeDecoder).li = function (tag) {
    return this.oq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).pq = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.lq(tag);
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
  protoOf(AbstractJsonTreeDecoder).mi = function (tag) {
    return this.pq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).qq = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.lq(tag);
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
    var specialFp = this.jl().hj_1.dl_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.jq()));
  };
  protoOf(AbstractJsonTreeDecoder).ni = function (tag) {
    return this.qq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).rq = function (tag) {
    var value = this.lq(tag);
    if (!this.jl().hj_1.vk_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.rl_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.jq()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.jq()));
    return value.ql();
  };
  protoOf(AbstractJsonTreeDecoder).oi = function (tag) {
    return this.rq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.jl();
      if (!descriptor.nb(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.mb(index);
      var tmp;
      if (!elementDescriptor.ya()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.kq(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.fb(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.ya()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.kq(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.kq(tag);
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
    $this.br_1 = (!$this.jl().hj_1.yk_1 && !descriptor.nb(index) && descriptor.mb(index).ya());
    return $this.br_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.xq_1 = value;
    this.yq_1 = polyDiscriminator;
    this.zq_1 = polyDescriptor;
    this.ar_1 = 0;
    this.br_1 = false;
  }
  protoOf(JsonTreeDecoder).x = function () {
    return this.xq_1;
  };
  protoOf(JsonTreeDecoder).kd = function (descriptor) {
    while (this.ar_1 < descriptor.hb()) {
      var tmp1 = this.ar_1;
      this.ar_1 = tmp1 + 1 | 0;
      var name = this.ci(descriptor, tmp1);
      var index = this.ar_1 - 1 | 0;
      this.br_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.x();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).y(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.iq_1.al_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).qc = function () {
    return !this.br_1 && protoOf(AbstractJsonTreeDecoder).qc.call(this);
  };
  protoOf(JsonTreeDecoder).di = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.jl());
    var baseName = descriptor.jb(index);
    if (strategy == null) {
      if (!this.iq_1.el_1)
        return baseName;
      if (this.x().a1().u(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.jl(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.x().a1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.z(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.dn(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).kq = function (tag) {
    return getValue(this.x(), tag);
  };
  protoOf(JsonTreeDecoder).zc = function (descriptor) {
    if (descriptor === this.zq_1) {
      var tmp = this.jl();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.jq();
      var descriptor_0 = this.zq_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor_0.eb() + ', but had ' + toString(getKClassFromExpression(value)));
      }
      return new JsonTreeDecoder(tmp, value, this.yq_1, this.zq_1);
    }
    return protoOf(AbstractJsonTreeDecoder).zc.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).ad = function (descriptor) {
    var tmp;
    if (this.iq_1.uk_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.fb();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.jl());
    var tmp_1;
    if (strategy == null && !this.iq_1.el_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.jl(), descriptor).a1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.jl()).np(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.x().a1().e();
    while (tmp1_iterator.f()) {
      var key = tmp1_iterator.g();
      if (!names.u(key) && !(key === this.yq_1)) {
        throw UnknownKeyException(key, this.x().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.hr_1 = value;
    this.ir_1 = this.hr_1.h();
    this.jr_1 = -1;
  }
  protoOf(JsonTreeListDecoder).x = function () {
    return this.hr_1;
  };
  protoOf(JsonTreeListDecoder).di = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).kq = function (tag) {
    return this.hr_1.j(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).kd = function (descriptor) {
    while (this.jr_1 < (this.ir_1 - 1 | 0)) {
      this.jr_1 = this.jr_1 + 1 | 0;
      return this.jr_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.ur_1 = value;
    this.vr_1 = toList(this.ur_1.a1());
    this.wr_1 = imul(this.vr_1.h(), 2);
    this.xr_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).x = function () {
    return this.ur_1;
  };
  protoOf(JsonTreeMapDecoder).di = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.vr_1.j(i);
  };
  protoOf(JsonTreeMapDecoder).kd = function (descriptor) {
    while (this.xr_1 < (this.wr_1 - 1 | 0)) {
      this.xr_1 = this.xr_1 + 1 | 0;
      return this.xr_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).kq = function (tag) {
    return (this.xr_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.ur_1, tag);
  };
  protoOf(JsonTreeMapDecoder).ad = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.ra())).yc(deserializer);
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
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.aq_1 = begin;
    this.bq_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.fb();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.mb(0), _this__u8e3s4.id());
          var keyKind = keyDescriptor.fb();
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
            if (_this__u8e3s4.hj_1.wk_1) {
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
    if (equals(_this__u8e3s4.fb(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.gb()) {
      tmp = carrierDescriptor(_this__u8e3s4.mb(0), module_0);
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
    $this.yr(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.yr(lastPosition, currentPosition);
    var result = $this.zj_1.toString();
    $this.zj_1.z7(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.yj_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.yj_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.zr(), $this.wj_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.as(currentPosition);
    if (currentPosition === -1) {
      $this.zm('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.zr();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.zr(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.zm("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.zj_1.m5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.wj_1 = startPos;
      $this.bs();
      if (($this.wj_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.zm('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.wj_1);
    }
    $this.zj_1.m5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.zm("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.as(start);
    if (current >= charSequenceLength($this.zr()) || current === -1) {
      $this.zm('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.zr();
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
        $this.zm("Expected valid boolean literal prefix, but had '" + $this.do() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.zr()) - current | 0) < literalSuffix.length) {
      $this.zm('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.zr(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.zm("Expected valid boolean literal prefix, but had '" + $this.do() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.wj_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.u1();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.u1();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.wj_1 = 0;
    this.xj_1 = new JsonPath();
    this.yj_1 = null;
    this.zj_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).bs = function () {
  };
  protoOf(AbstractJsonLexer).cs = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).ak = function () {
    var nextToken = this.fo();
    if (!(nextToken === 10)) {
      this.zm('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.zr(), this.wj_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).zn = function (expected) {
    var token = this.fo();
    if (!(token === expected)) {
      this.ds(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).pp = function (expected) {
    this.bs();
    var source = this.zr();
    var cpos = this.wj_1;
    $l$loop_0: while (true) {
      cpos = this.as(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.wj_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.es(expected);
    }
    this.wj_1 = cpos;
    this.es(expected);
  };
  protoOf(AbstractJsonLexer).es = function (expected) {
    if (this.wj_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.wj_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.wj_1 = this.wj_1 - 1 | 0;
          tmp$ret$1 = this.do();
          break $l$block;
        }finally {
          this.wj_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.ym("Expected string literal but 'null' literal was found", this.wj_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.ds(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).fs = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.wj_1 - 1 | 0 : this.wj_1;
    var s = this.wj_1 === charSequenceLength(this.zr()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.zr(), position));
    this.zm('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).ds = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.fs(expectedToken, wasConsumed) : $super.fs.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).ao = function () {
    var source = this.zr();
    var cpos = this.wj_1;
    $l$loop_0: while (true) {
      cpos = this.as(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.wj_1 = cpos;
      return charToTokenClass(ch);
    }
    this.wj_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).rp = function (doConsume) {
    var current = this.gs();
    current = this.as(current);
    var len = charSequenceLength(this.zr()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.zr(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.zr(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.wj_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).cq = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.rp(doConsume) : $super.rp.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).gs = function () {
    var current = this.wj_1;
    $l$loop_0: while (true) {
      current = this.as(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.zr(), current);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.wj_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).sp = function (isLenient) {
    var token = this.ao();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.do();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.co();
    }
    var string = tmp;
    this.yj_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).hs = function () {
    this.yj_1 = null;
  };
  protoOf(AbstractJsonLexer).is = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.zr();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).co = function () {
    if (!(this.yj_1 == null)) {
      return takePeeked(this);
    }
    return this.vp();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.as(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.zm('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.yr(lastPosition, currentPosition);
          currentPosition = this.as(currentPosition);
          if (currentPosition === -1) {
            this.zm('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.is(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.wj_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).wp = function () {
    var result = this.do();
    if (result === 'null' && wasUnquotedString(this)) {
      this.zm("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).do = function () {
    if (!(this.yj_1 == null)) {
      return takePeeked(this);
    }
    var current = this.gs();
    if (current >= charSequenceLength(this.zr()) || current === -1) {
      this.zm('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.zr(), current));
    if (token === 1) {
      return this.co();
    }
    if (!(token === 0)) {
      this.zm('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.zr(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.zr(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.zr())) {
        usedAppend = true;
        this.yr(this.wj_1, current);
        var eof = this.as(current);
        if (eof === -1) {
          this.wj_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.is(this.wj_1, current);
    } else {
      tmp = decodedString(this, this.wj_1, current);
    }
    var result = tmp;
    this.wj_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).yr = function (fromIndex, toIndex) {
    this.zj_1.v7(this.zr(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).up = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.ao();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.do();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.ao();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.do();
        } else {
          this.vp();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.i(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.wj_1, 'found ] instead of } at path: ' + this.xj_1.toString(), this.zr());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.wj_1, 'found } instead of ] at path: ' + this.xj_1.toString(), this.zr());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.zm('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.fo();
      if (tokenStack.h() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.zr()) + "', currentPosition=" + this.wj_1 + ')';
  };
  protoOf(AbstractJsonLexer).tp = function (key) {
    var processed = this.is(0, this.wj_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.ym("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).ym = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.xj_1.mn() + hintMessage, this.zr());
  };
  protoOf(AbstractJsonLexer).zm = function (message, position, hint, $super) {
    position = position === VOID ? this.wj_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.ym(message, position, hint) : $super.ym.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).wl = function () {
    var current = this.gs();
    current = this.as(current);
    if (current >= charSequenceLength(this.zr()) || current === -1) {
      this.zm('EOF');
    }
    var tmp;
    if (charSequenceGet(this.zr(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.zr())) {
        this.zm('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.zr()))) {
      var ch = charSequenceGet(this.zr(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.zm('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.zm("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.zm("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.zm("Unexpected symbol '-' in numeric literal");
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
        this.zm("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.o1(toLong(10)).m1(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.o1(toLong(10)).n1(toLong(digit));
      if (accumulator.r(new Long(0, 0)) > 0) {
        this.zm('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.zm('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.zm('EOF');
      }
      if (!(charSequenceGet(this.zr(), current) === _Char___init__impl__6a9atx(34))) {
        this.zm('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.wj_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.u1() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).u1() || doubleAccumulator < (new Long(0, -2147483648)).u1()) {
        this.zm('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.zm("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.q1();
    } else {
      this.zm('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).dq = function () {
    var current = this.gs();
    if (current === charSequenceLength(this.zr())) {
      this.zm('EOF');
    }
    var tmp;
    if (charSequenceGet(this.zr(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.wj_1 === charSequenceLength(this.zr())) {
        this.zm('EOF');
      }
      if (!(charSequenceGet(this.zr(), this.wj_1) === _Char___init__impl__6a9atx(34))) {
        this.zm('Expected closing quotation mark');
      }
      this.wj_1 = this.wj_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().ks_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().js_1[c] : _Char___init__impl__6a9atx(0);
  }
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
      $this.js_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.ks_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.js_1 = charArray(117);
    this.ks_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.ps_1 = source;
  }
  protoOf(StringJsonLexer).zr = function () {
    return this.ps_1;
  };
  protoOf(StringJsonLexer).as = function (position) {
    return position < this.ps_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).fo = function () {
    var source = this.ps_1;
    $l$loop: while (!(this.wj_1 === -1) && this.wj_1 < source.length) {
      var tmp1 = this.wj_1;
      this.wj_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === 3) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return 10;
  };
  protoOf(StringJsonLexer).qp = function () {
    var current = this.gs();
    if (current === this.ps_1.length || current === -1)
      return false;
    if (charSequenceGet(this.ps_1, current) === _Char___init__impl__6a9atx(44)) {
      this.wj_1 = this.wj_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).bo = function () {
    var current = this.wj_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.ps_1.length) {
      var c = charSequenceGet(this.ps_1, current);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.wj_1 = current;
      return this.cs(c);
    }
    this.wj_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).gs = function () {
    var current = this.wj_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.ps_1.length) {
      var c = charSequenceGet(this.ps_1, current);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.wj_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).pp = function (expected) {
    if (this.wj_1 === -1) {
      this.es(expected);
    }
    var source = this.ps_1;
    $l$loop: while (this.wj_1 < source.length) {
      var tmp1 = this.wj_1;
      this.wj_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.es(expected);
    }
    this.wj_1 = -1;
    this.es(expected);
  };
  protoOf(StringJsonLexer).vp = function () {
    this.pp(_Char___init__impl__6a9atx(34));
    var current = this.wj_1;
    var closingQuote = indexOf(this.ps_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.do();
      this.fs(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.ps_1, i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.ps_1, this.wj_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.wj_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.ps_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).xp = function (keyToMatch, isLenient) {
    var positionSnapshot = this.wj_1;
    try {
      if (!(this.fo() === 6))
        return null;
      var firstKey = this.sp(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.hs();
      if (!(this.fo() === 5))
        return null;
      return this.sp(isLenient);
    }finally {
      this.wj_1 = positionSnapshot;
      this.hs();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.jj_1;
  }
  function JsonToStringWriter() {
    this.mj_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).mm = function (value) {
    this.mj_1.y7(value);
  };
  protoOf(JsonToStringWriter).hm = function (char) {
    this.mj_1.m5(char);
  };
  protoOf(JsonToStringWriter).jm = function (text) {
    this.mj_1.l5(text);
  };
  protoOf(JsonToStringWriter).pm = function (text) {
    printQuoted(this.mj_1, text);
  };
  protoOf(JsonToStringWriter).nj = function () {
    this.mj_1.a8();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.mj_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).dj = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
