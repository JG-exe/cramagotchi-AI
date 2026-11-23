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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var protoOf = kotlin_kotlin.$_$.x3;
  var initMetadataForObject = kotlin_kotlin.$_$.n3;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var initMetadataForClass = kotlin_kotlin.$_$.i3;
  var toString = kotlin_kotlin.$_$.z3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var charSequenceLength = kotlin_kotlin.$_$.y2;
  var charSequenceGet = kotlin_kotlin.$_$.x2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v;
  var equals = kotlin_kotlin.$_$.b3;
  var toString_0 = kotlin_kotlin.$_$.o5;
  var Enum = kotlin_kotlin.$_$.z4;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var initMetadataForInterface = kotlin_kotlin.$_$.l3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.d5;
  var hashCode = kotlin_kotlin.$_$.h3;
  var joinToString = kotlin_kotlin.$_$.v1;
  var KtMap = kotlin_kotlin.$_$.f1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.k5;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.d3;
  var getStringHashCode = kotlin_kotlin.$_$.g3;
  var asJsReadonlyArrayView = kotlin_kotlin.$_$.d1;
  var KtList = kotlin_kotlin.$_$.e1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.u;
  var numberRangeToNumber = kotlin_kotlin.$_$.s3;
  var ClosedRange = kotlin_kotlin.$_$.b4;
  var isInterface = kotlin_kotlin.$_$.q3;
  var contains = kotlin_kotlin.$_$.f4;
  var toDouble = kotlin_kotlin.$_$.t4;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.z;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toLong = kotlin_kotlin.$_$.y3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.u2;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.z2;
  var coerceAtLeast = kotlin_kotlin.$_$.c4;
  var coerceAtMost = kotlin_kotlin.$_$.d4;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.i2;
  var emptyMap = kotlin_kotlin.$_$.p1;
  var getValue = kotlin_kotlin.$_$.r1;
  var fillArrayVal = kotlin_kotlin.$_$.c3;
  var copyOf = kotlin_kotlin.$_$.l1;
  var copyOf_0 = kotlin_kotlin.$_$.m1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.x4;
  var invoke = kotlin_kotlin.$_$.i5;
  var CoroutineImpl = kotlin_kotlin.$_$.q2;
  var DeepRecursiveScope = kotlin_kotlin.$_$.y4;
  var Unit = kotlin_kotlin.$_$.f5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p2;
  var initMetadataForLambda = kotlin_kotlin.$_$.m3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.k3;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var getKClass = kotlin_kotlin.$_$.b;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var ensureNotNull = kotlin_kotlin.$_$.h5;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var substringBefore = kotlin_kotlin.$_$.s4;
  var removeSuffix = kotlin_kotlin.$_$.p4;
  var substringAfter = kotlin_kotlin.$_$.r4;
  var contains_0 = kotlin_kotlin.$_$.j4;
  var plus = kotlin_kotlin.$_$.n5;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var IllegalArgumentException = kotlin_kotlin.$_$.b5;
  var isFinite = kotlin_kotlin.$_$.j5;
  var objectCreate = kotlin_kotlin.$_$.w3;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.m5;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.x;
  var numberToChar = kotlin_kotlin.$_$.t3;
  var equals_0 = kotlin_kotlin.$_$.k4;
  var toString_1 = kotlin_kotlin.$_$.y;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var emptySet = kotlin_kotlin.$_$.q1;
  var plus_0 = kotlin_kotlin.$_$.e2;
  var toInt = kotlin_kotlin.$_$.v4;
  var toList = kotlin_kotlin.$_$.l2;
  var enumEntries = kotlin_kotlin.$_$.r2;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var last = kotlin_kotlin.$_$.z1;
  var removeLast = kotlin_kotlin.$_$.h2;
  var lastIndexOf = kotlin_kotlin.$_$.n4;
  var Long = kotlin_kotlin.$_$.c5;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.w;
  var numberToLong = kotlin_kotlin.$_$.v3;
  var charArray = kotlin_kotlin.$_$.w2;
  var indexOf = kotlin_kotlin.$_$.l4;
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
    this.uk_1 = configuration;
    this.vk_1 = serializersModule;
    this.wk_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).je = function () {
    return this.vk_1;
  };
  protoOf(Json).xk = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.al();
    }
  };
  protoOf(Json).yk = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.sb(), null);
    var result = input.zd(deserializer);
    lexer.nl();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.fm();
    return new JsonImpl(conf, builder.em_1);
  }
  function JsonBuilder(json) {
    this.ol_1 = json.uk_1.gm_1;
    this.pl_1 = json.uk_1.lm_1;
    this.ql_1 = json.uk_1.hm_1;
    this.rl_1 = json.uk_1.im_1;
    this.sl_1 = json.uk_1.jm_1;
    this.tl_1 = json.uk_1.km_1;
    this.ul_1 = json.uk_1.mm_1;
    this.vl_1 = json.uk_1.nm_1;
    this.wl_1 = json.uk_1.om_1;
    this.xl_1 = json.uk_1.pm_1;
    this.yl_1 = json.uk_1.vm_1;
    this.zl_1 = json.uk_1.qm_1;
    this.am_1 = json.uk_1.rm_1;
    this.bm_1 = json.uk_1.sm_1;
    this.cm_1 = json.uk_1.tm_1;
    this.dm_1 = json.uk_1.um_1;
    this.em_1 = json.je();
  }
  protoOf(JsonBuilder).fm = function () {
    if (this.wl_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.xl_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.yl_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.tl_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.ul_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.ul_1 === '    ')) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.ul_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.ul_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.ol_1, this.ql_1, this.rl_1, this.sl_1, this.tl_1, this.pl_1, this.ul_1, this.vl_1, this.wl_1, this.xl_1, this.zl_1, this.am_1, this.bm_1, this.cm_1, this.dm_1, this.yl_1);
  };
  function validateConfiguration($this) {
    if (equals($this.je(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.uk_1.om_1, $this.uk_1.pm_1);
    $this.je().gk(collector);
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
    this.gm_1 = encodeDefaults;
    this.hm_1 = ignoreUnknownKeys;
    this.im_1 = isLenient;
    this.jm_1 = allowStructuredMapKeys;
    this.km_1 = prettyPrint;
    this.lm_1 = explicitNulls;
    this.mm_1 = prettyPrintIndent;
    this.nm_1 = coerceInputValues;
    this.om_1 = useArrayPolymorphism;
    this.pm_1 = classDiscriminator;
    this.qm_1 = allowSpecialFloatingPointValues;
    this.rm_1 = useAlternativeNames;
    this.sm_1 = namingStrategy;
    this.tm_1 = decodeEnumsCaseInsensitive;
    this.um_1 = allowTrailingComma;
    this.vm_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.gm_1 + ', ignoreUnknownKeys=' + this.hm_1 + ', isLenient=' + this.im_1 + ', ' + ('allowStructuredMapKeys=' + this.jm_1 + ', prettyPrint=' + this.km_1 + ', explicitNulls=' + this.lm_1 + ', ') + ("prettyPrintIndent='" + this.mm_1 + "', coerceInputValues=" + this.nm_1 + ', useArrayPolymorphism=' + this.om_1 + ', ') + ("classDiscriminator='" + this.pm_1 + "', allowSpecialFloatingPointValues=" + this.qm_1 + ', ') + ('useAlternativeNames=' + this.rm_1 + ', namingStrategy=' + toString_0(this.sm_1) + ', decodeEnumsCaseInsensitive=' + this.tm_1 + ', ') + ('allowTrailingComma=' + this.um_1 + ', classDiscriminatorMode=' + this.vm_1.toString() + ')');
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
    var k = _name_for_destructuring_parameter_0__wldtmu.e1();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.f1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.d6(_Char___init__impl__6a9atx(58));
    this_0.b6(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.ym_1 = content;
  }
  protoOf(JsonObject).j1 = function () {
    return this.ym_1.j1();
  };
  protoOf(JsonObject).i1 = function () {
    return this.ym_1.i1();
  };
  protoOf(JsonObject).h = function () {
    return this.ym_1.h();
  };
  protoOf(JsonObject).zm = function (key) {
    return this.ym_1.g1(key);
  };
  protoOf(JsonObject).g1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.zm((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).an = function (key) {
    return this.ym_1.h1(key);
  };
  protoOf(JsonObject).h1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.an((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).o = function () {
    return this.ym_1.o();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.ym_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.ym_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.ym_1.j1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.bn_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.cn_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).dn = function () {
    return this.bn_1;
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
    return this.dn();
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
    this.en_1 = isString;
    this.fn_1 = coerceToInlineType;
    this.gn_1 = toString(body);
    if (!(this.fn_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.fn_1.hc()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).dn = function () {
    return this.gn_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.en_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.gn_1);
      tmp = this_0.toString();
    } else {
      tmp = this.gn_1;
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
    if (!(this.en_1 === other.en_1))
      return false;
    if (!(this.gn_1 === other.gn_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.en_1);
    result = imul(31, result) + getStringHashCode(this.gn_1) | 0;
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
    this.hn_1 = content;
  }
  protoOf(JsonArray).h = function () {
    return this.hn_1.h();
  };
  protoOf(JsonArray).in = function (element) {
    return this.hn_1.x(element);
  };
  protoOf(JsonArray).x = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.in(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).jn = function (elements) {
    return this.hn_1.y(elements);
  };
  protoOf(JsonArray).y = function (elements) {
    return this.jn(elements);
  };
  protoOf(JsonArray).n = function (index) {
    return this.hn_1.n(index);
  };
  protoOf(JsonArray).kn = function (element) {
    return this.hn_1.z(element);
  };
  protoOf(JsonArray).z = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.kn(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).o = function () {
    return this.hn_1.o();
  };
  protoOf(JsonArray).e = function () {
    return this.hn_1.e();
  };
  protoOf(JsonArray).ln = function (element) {
    return this.hn_1.a1(element);
  };
  protoOf(JsonArray).a1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.ln(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).b1 = function () {
    return this.hn_1.b1();
  };
  protoOf(JsonArray).c1 = function (index) {
    return this.hn_1.c1(index);
  };
  protoOf(JsonArray).d1 = function (fromIndex, toIndex) {
    return this.hn_1.d1(fromIndex, toIndex);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.hn_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.hn_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.hn_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.dn());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.dn())).mn();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.dn() + ' is not an Int');
    return result.u();
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.dn());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.dn();
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
    this.nn_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).sb = function () {
    return this.nn_1;
  };
  protoOf(JsonNullSerializer).on = function (encoder, value) {
    verify(encoder);
    encoder.pe();
  };
  protoOf(JsonNullSerializer).tb = function (encoder, value) {
    return this.on(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).ub = function (decoder) {
    verify_0(decoder);
    if (decoder.rd()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.sd();
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
    this.pn_1 = writer;
    this.qn_1 = true;
  }
  protoOf(Composer).rn = function () {
    this.qn_1 = true;
  };
  protoOf(Composer).sn = function () {
    return Unit_instance;
  };
  protoOf(Composer).tn = function () {
    this.qn_1 = false;
  };
  protoOf(Composer).un = function () {
    this.qn_1 = false;
  };
  protoOf(Composer).vn = function () {
    return Unit_instance;
  };
  protoOf(Composer).wn = function (v) {
    return this.pn_1.xn(v);
  };
  protoOf(Composer).yn = function (v) {
    return this.pn_1.zn(v);
  };
  protoOf(Composer).ao = function (v) {
    return this.pn_1.zn(v.toString());
  };
  protoOf(Composer).bo = function (v) {
    return this.pn_1.co(toLong(v));
  };
  protoOf(Composer).do = function (v) {
    return this.pn_1.zn(v.toString());
  };
  protoOf(Composer).eo = function (value) {
    return this.pn_1.fo(value);
  };
  function Composer_0(sb, json) {
    return json.uk_1.km_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.io_1 = json;
    this.jo_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).rn = function () {
    this.qn_1 = true;
    this.jo_1 = this.jo_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).sn = function () {
    this.jo_1 = this.jo_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).tn = function () {
    this.qn_1 = false;
    this.yn('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.jo_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.yn(this.io_1.uk_1.mm_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).un = function () {
    if (this.qn_1)
      this.qn_1 = false;
    else {
      this.tn();
    }
  };
  protoOf(ComposerWithPrettyPrint).vn = function () {
    this.wn(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.lo_1 = (!descriptor.oc(index) && descriptor.nc(index).zb());
    return $this.lo_1;
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
    tmp.ko_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.lo_1 = false;
  }
  protoOf(JsonElementMarker).mo = function (index) {
    this.ko_1.bh(index);
  };
  protoOf(JsonElementMarker).no = function () {
    return this.ko_1.ch();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.oo('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.jl_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.po('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.fc() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.gc().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.lc(name);
    if (!(index === -3))
      return index;
    if (!json.uk_1.rm_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.fc() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.kc(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.gc(), CLASS_getInstance()) ? json.uk_1.sm_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.ro(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.uk_1.tm_1 && equals(descriptor.gc(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).h1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.ro(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.ic();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.mc(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          if (element instanceof JsonNames) {
            destination.m(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.so_1;
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
          tmp_0 = _this__u8e3s4.kc(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.to(_this__u8e3s4, i, _this__u8e3s4.kc(i));
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
    if (builder.o()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.gc(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).g1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.kc(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.kc(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.r3(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.ic();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.kc(tmp_2);
        tmp_1[tmp_2] = $strategy.to($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.wo_1, 2);
    $this.uo_1 = copyOf($this.uo_1, newSize);
    $this.vo_1 = copyOf_0($this.vo_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.uo_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.vo_1 = tmp_2;
    this.wo_1 = -1;
  }
  protoOf(JsonPath).xo = function (sd) {
    this.wo_1 = this.wo_1 + 1 | 0;
    var depth = this.wo_1;
    if (depth === this.uo_1.length) {
      resize(this);
    }
    this.uo_1[depth] = sd;
  };
  protoOf(JsonPath).yo = function (index) {
    this.vo_1[this.wo_1] = index;
  };
  protoOf(JsonPath).zo = function (key) {
    var tmp;
    if (!(this.vo_1[this.wo_1] === -2)) {
      this.wo_1 = this.wo_1 + 1 | 0;
      tmp = this.wo_1 === this.uo_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.uo_1[this.wo_1] = key;
    this.vo_1[this.wo_1] = -2;
  };
  protoOf(JsonPath).ap = function () {
    if (this.vo_1[this.wo_1] === -2) {
      this.uo_1[this.wo_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).bp = function () {
    var depth = this.wo_1;
    if (this.vo_1[depth] === -2) {
      this.vo_1[depth] = -1;
      this.wo_1 = this.wo_1 - 1 | 0;
    }
    if (!(this.wo_1 === -1)) {
      this.wo_1 = this.wo_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).cp = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.c6('$');
    // Inline function 'kotlin.repeat' call
    var times = this.wo_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.uo_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.gc(), LIST_getInstance())) {
            if (!(this.vo_1[index] === -1)) {
              this_0.c6('[');
              this_0.o8(this.vo_1[index]);
              this_0.c6(']');
            }
          } else {
            var idx = this.vo_1[index];
            if (idx >= 0) {
              this_0.c6('.');
              this_0.c6(element.kc(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.c6('[');
            this_0.c6("'");
            this_0.b6(element);
            this_0.c6("'");
            this_0.c6(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.cp();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().h();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.af(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.lp_1.pp(6);
    if ($this.lp_1.qp() === 4) {
      $this.lp_1.po('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.lp_1.rp()) {
      var key = $this.mp_1 ? $this.lp_1.tp() : $this.lp_1.sp();
      $this.lp_1.pp(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.up();
      // Inline function 'kotlin.collections.set' call
      result.r3(key, element);
      lastToken = $this.lp_1.vp();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.lp_1.po('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.lp_1.pp(7);
    } else if (lastToken === 4) {
      if (!$this.np_1) {
        invalidTrailingComma($this.lp_1);
      }
      $this.lp_1.pp(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.s6_1 = Unit_instance;
    tmp.t6_1 = null;
    return tmp.y6();
  }
  function readArray($this) {
    var lastToken = $this.lp_1.vp();
    if ($this.lp_1.qp() === 4) {
      $this.lp_1.po('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.lp_1.rp()) {
      var element = $this.up();
      result.m(element);
      lastToken = $this.lp_1.vp();
      if (!(lastToken === 4)) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.lp_1;
        var condition = lastToken === 9;
        var position = this_0.jl_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.po(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.lp_1.pp(9);
    } else if (lastToken === 4) {
      if (!$this.np_1) {
        invalidTrailingComma($this.lp_1, 'array');
      }
      $this.lp_1.pp(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.mp_1 || !isString) {
      tmp = $this.lp_1.tp();
    } else {
      tmp = $this.lp_1.sp();
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
    this.sq_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).xq = function ($this$$receiver, it, $completion) {
    var tmp = this.yq($this$$receiver, it, $completion);
    tmp.s6_1 = Unit_instance;
    tmp.t6_1 = null;
    return tmp.y6();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.xq(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y6 = function () {
    var suspendResult = this.s6_1;
    $sm: do
      try {
        var tmp = this.q6_1;
        switch (tmp) {
          case 0:
            this.r6_1 = 3;
            this.vq_1 = this.sq_1.lp_1.qp();
            if (this.vq_1 === 1) {
              this.wq_1 = readValue(this.sq_1, true);
              this.q6_1 = 2;
              continue $sm;
            } else {
              if (this.vq_1 === 0) {
                this.wq_1 = readValue(this.sq_1, false);
                this.q6_1 = 2;
                continue $sm;
              } else {
                if (this.vq_1 === 6) {
                  this.q6_1 = 1;
                  suspendResult = readObject_0(this.tq_1, this.sq_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.vq_1 === 8) {
                    this.wq_1 = readArray(this.sq_1);
                    this.q6_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.sq_1.lp_1.po("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.wq_1 = suspendResult;
            this.q6_1 = 2;
            continue $sm;
          case 2:
            return this.wq_1;
          case 3:
            throw this.t6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r6_1 === 3) {
          throw e;
        } else {
          this.q6_1 = this.r6_1;
          this.t6_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).yq = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.sq_1, completion);
    i.tq_1 = $this$$receiver;
    i.uq_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.xq($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eq_1 = _this__u8e3s4;
    this.fq_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).y6 = function () {
    var suspendResult = this.s6_1;
    $sm: do
      try {
        var tmp = this.q6_1;
        switch (tmp) {
          case 0:
            this.r6_1 = 5;
            var tmp_0 = this;
            tmp_0.gq_1 = this.eq_1;
            this.hq_1 = this.gq_1.lp_1.pp(6);
            if (this.gq_1.lp_1.qp() === 4) {
              this.gq_1.lp_1.po('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.iq_1 = LinkedHashMap_init_$Create$();
            this.q6_1 = 1;
            continue $sm;
          case 1:
            if (!this.gq_1.lp_1.rp()) {
              this.q6_1 = 4;
              continue $sm;
            }

            this.jq_1 = this.gq_1.mp_1 ? this.gq_1.lp_1.tp() : this.gq_1.lp_1.sp();
            this.gq_1.lp_1.pp(5);
            this.q6_1 = 2;
            suspendResult = this.fq_1.fb(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.iq_1;
            var key = this.jq_1;
            this_0.r3(key, element);
            this.hq_1 = this.gq_1.lp_1.vp();
            var tmp0_subject = this.hq_1;
            if (tmp0_subject === 4) {
              this.q6_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.q6_1 = 4;
                continue $sm;
              } else {
                this.gq_1.lp_1.po('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.q6_1 = 1;
            continue $sm;
          case 4:
            if (this.hq_1 === 6) {
              this.gq_1.lp_1.pp(7);
            } else if (this.hq_1 === 4) {
              if (!this.gq_1.np_1) {
                invalidTrailingComma(this.gq_1.lp_1);
              }
              this.gq_1.lp_1.pp(7);
            }

            return new JsonObject(this.iq_1);
          case 5:
            throw this.t6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r6_1 === 5) {
          throw e;
        } else {
          this.q6_1 = this.r6_1;
          this.t6_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.lp_1 = lexer;
    this.mp_1 = configuration.im_1;
    this.np_1 = configuration.um_1;
    this.op_1 = 0;
  }
  protoOf(JsonTreeReader).up = function () {
    var token = this.lp_1.qp();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.op_1 = this.op_1 + 1 | 0;
      if (this.op_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.op_1 = this.op_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.lp_1.po('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.jc().e();
    while (tmp0_iterator.f()) {
      var annotation = tmp0_iterator.g();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.zq_1;
    }
    return json.uk_1.pm_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.wm().uk_1.om_1;
    }
    if (tmp) {
      return deserializer.ub(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.sb(), _this__u8e3s4.wm());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.xm();
    var descriptor = deserializer.sb();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.fc() + ', but had ' + toString(getKClassFromExpression(value)));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.an(discriminator);
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
    return readPolymorphicJson(_this__u8e3s4.wm(), discriminator, jsonTree, actualSerializer);
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.sb()).x(classDiscriminator)) {
      var baseName = serializer.sb().fc();
      var actualName = actualSerializer.sb().fc();
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
    var kind = descriptor.gc();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.h7() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.ar_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.h7() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ic();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.kc(i);
        if (name === $this.br_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.ar_1 = useArrayPolymorphism;
    this.br_1 = discriminator;
  }
  protoOf(PolymorphismValidator).ok = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).rk = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.sb();
    checkKind_0(this, descriptor, actualClass);
    if (!this.ar_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).sk = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).tk = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.qo_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).cr = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.qo_1;
    var value_0 = this_0.h1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.r3(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.r3(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).ro = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.dr(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.cr(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).dr = function (descriptor, key) {
    var tmp0_safe_receiver = this.qo_1.h1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.h1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.er_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.er_1 === unknownKey) {
      _this__u8e3s4.er_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.le(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.dl_1.qp() === 4) {
      $this.dl_1.po('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.fl_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.fl_1 === -1)) {
        hasComma = $this.dl_1.gr();
      }
    } else {
      $this.dl_1.fr(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.dl_1.rp()) {
      if (decodingKey) {
        if ($this.fl_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.dl_1;
          var condition = !hasComma;
          var position = this_0.jl_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            this_0.po(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.dl_1;
          var condition_0 = hasComma;
          var position_0 = this_1.jl_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.po(tmp$ret$1, position_0);
          }
        }
      }
      $this.fl_1 = $this.fl_1 + 1 | 0;
      tmp = $this.fl_1;
    } else {
      if (hasComma && !$this.bl_1.uk_1.um_1) {
        invalidTrailingComma($this.dl_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.bl_1;
      if (!descriptor.oc(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.nc(index);
      var tmp;
      if (!elementDescriptor.zb()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.dl_1.hr(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.gc(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.zb()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.dl_1.hr(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.dl_1.ir($this.hl_1.im_1);
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
          $this.dl_1.sp();
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.dl_1.gr();
    while ($this.dl_1.rp()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.dl_1.fr(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.bl_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.hl_1.nm_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.dl_1.gr();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.il_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.mo(index);
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
    if (hasComma && !$this.bl_1.uk_1.um_1) {
      invalidTrailingComma($this.dl_1);
    }
    var tmp1_safe_receiver = $this.il_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.no();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.hl_1.hm_1 || trySkip($this.gl_1, $this, key)) {
      $this.dl_1.kr($this.hl_1.im_1);
    } else {
      $this.dl_1.jr(key);
    }
    return $this.dl_1.gr();
  }
  function decodeListIndex($this) {
    var hasComma = $this.dl_1.gr();
    var tmp;
    if ($this.dl_1.rp()) {
      if (!($this.fl_1 === -1) && !hasComma) {
        $this.dl_1.po('Expected end of the array or comma');
      }
      $this.fl_1 = $this.fl_1 + 1 | 0;
      tmp = $this.fl_1;
    } else {
      if (hasComma && !$this.bl_1.uk_1.um_1) {
        invalidTrailingComma($this.dl_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.hl_1.im_1) {
      tmp = $this.dl_1.mr();
    } else {
      tmp = $this.dl_1.lr();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.bl_1 = json;
    this.cl_1 = mode;
    this.dl_1 = lexer;
    this.el_1 = this.bl_1.je();
    this.fl_1 = -1;
    this.gl_1 = discriminatorHolder;
    this.hl_1 = this.bl_1.uk_1;
    this.il_1 = this.hl_1.lm_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).wm = function () {
    return this.bl_1;
  };
  protoOf(StreamingJsonDecoder).je = function () {
    return this.el_1;
  };
  protoOf(StreamingJsonDecoder).xm = function () {
    return (new JsonTreeReader(this.bl_1.uk_1, this.dl_1)).up();
  };
  protoOf(StreamingJsonDecoder).zd = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.bl_1.uk_1.om_1;
      }
      if (tmp) {
        return deserializer.ub(this);
      }
      var discriminator = classDiscriminator(deserializer.sb(), this.bl_1);
      var tmp0_elvis_lhs = this.dl_1.nr(discriminator, this.hl_1.im_1);
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
          this.dl_1.po(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp_3 = tmp_1;
      var actualSerializer = isInterface(tmp_3, DeserializationStrategy) ? tmp_3 : THROW_CCE();
      this.gl_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer.ub(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.yb_1, plus(e.message, ' at path: ') + this.dl_1.kl_1.cp(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).ae = function (descriptor) {
    var newMode = switchMode(this.bl_1, descriptor);
    this.dl_1.kl_1.xo(descriptor);
    this.dl_1.fr(newMode.qr_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.l1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.bl_1, newMode, this.dl_1, descriptor, this.gl_1);
        break;
      default:
        var tmp_0;
        if (this.cl_1.equals(newMode) && this.bl_1.uk_1.lm_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.bl_1, newMode, this.dl_1, descriptor, this.gl_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).be = function (descriptor) {
    if (this.bl_1.uk_1.hm_1 && descriptor.ic() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.dl_1.gr() && !this.bl_1.uk_1.um_1) {
      invalidTrailingComma(this.dl_1, '');
    }
    this.dl_1.fr(this.cl_1.rr_1);
    this.dl_1.kl_1.bp();
  };
  protoOf(StreamingJsonDecoder).rd = function () {
    var tmp;
    var tmp0_safe_receiver = this.il_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lo_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.dl_1.sr();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).sd = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).ge = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.cl_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.dl_1.kl_1.ap();
    }
    var value = protoOf(AbstractDecoder).ge.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.dl_1.kl_1.zo(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).le = function (descriptor) {
    var index;
    switch (this.cl_1.l1_1) {
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
    if (!this.cl_1.equals(WriteMode_MAP_getInstance())) {
      this.dl_1.kl_1.yo(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).td = function () {
    return this.dl_1.tr();
  };
  protoOf(StreamingJsonDecoder).ud = function () {
    var value = this.dl_1.mn();
    if (!value.equals(toLong(value.u()))) {
      this.dl_1.po("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.u();
  };
  protoOf(StreamingJsonDecoder).vd = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.dl_1;
      var input = this_0.tp();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.po("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.bl_1.uk_1.qm_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.dl_1, result);
  };
  protoOf(StreamingJsonDecoder).wd = function () {
    var tmp;
    if (this.hl_1.im_1) {
      tmp = this.dl_1.mr();
    } else {
      tmp = this.dl_1.sp();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xd = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.bl_1, this.wd(), ' at path ' + this.dl_1.kl_1.cp());
  };
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.dp_1.tn();
    $this.te(ensureNotNull($this.kp_1));
    $this.dp_1.wn(_Char___init__impl__6a9atx(58));
    $this.dp_1.vn();
    $this.te(descriptor.fc());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.dp_1 = composer;
    this.ep_1 = json;
    this.fp_1 = mode;
    this.gp_1 = modeReuseCache;
    this.hp_1 = this.ep_1.je();
    this.ip_1 = this.ep_1.uk_1;
    this.jp_1 = false;
    this.kp_1 = null;
    var i = this.fp_1.l1_1;
    if (!(this.gp_1 == null)) {
      if (!(this.gp_1[i] === null) || !(this.gp_1[i] === this)) {
        this.gp_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).wm = function () {
    return this.ep_1;
  };
  protoOf(StreamingJsonEncoder).je = function () {
    return this.hp_1;
  };
  protoOf(StreamingJsonEncoder).ff = function (descriptor, index) {
    return this.ip_1.gm_1;
  };
  protoOf(StreamingJsonEncoder).af = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.wm().uk_1.om_1) {
        serializer.tb(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.wm().uk_1.vm_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.wm().uk_1.vm_1.l1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.sb().gc();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.sb(), this.wm()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.sb()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          validateIfSealed$accessor$1ad0flx(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.sb().gc());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        this.kp_1 = baseClassDiscriminator;
      }
      actualSerializer.tb(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).ae = function (descriptor) {
    var newMode = switchMode(this.ep_1, descriptor);
    if (!(newMode.qr_1 === _Char___init__impl__6a9atx(0))) {
      this.dp_1.wn(newMode.qr_1);
      this.dp_1.rn();
    }
    if (!(this.kp_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.kp_1 = null;
    }
    if (this.fp_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.gp_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.l1_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.dp_1, this.ep_1, newMode, this.gp_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).be = function (descriptor) {
    if (!(this.fp_1.rr_1 === _Char___init__impl__6a9atx(0))) {
      this.dp_1.sn();
      this.dp_1.un();
      this.dp_1.wn(this.fp_1.rr_1);
    }
  };
  protoOf(StreamingJsonEncoder).ne = function (descriptor, index) {
    switch (this.fp_1.l1_1) {
      case 1:
        if (!this.dp_1.qn_1) {
          this.dp_1.wn(_Char___init__impl__6a9atx(44));
        }

        this.dp_1.tn();
        break;
      case 2:
        if (!this.dp_1.qn_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.dp_1.wn(_Char___init__impl__6a9atx(44));
            this.dp_1.tn();
            tmp_0 = true;
          } else {
            this.dp_1.wn(_Char___init__impl__6a9atx(58));
            this.dp_1.vn();
            tmp_0 = false;
          }
          tmp.jp_1 = tmp_0;
        } else {
          this.jp_1 = true;
          this.dp_1.tn();
        }

        break;
      case 3:
        if (index === 0)
          this.jp_1 = true;
        if (index === 1) {
          this.dp_1.wn(_Char___init__impl__6a9atx(44));
          this.dp_1.vn();
          this.jp_1 = false;
        }

        break;
      default:
        if (!this.dp_1.qn_1) {
          this.dp_1.wn(_Char___init__impl__6a9atx(44));
        }

        this.dp_1.tn();
        this.te(getJsonElementName(descriptor, this.ep_1, index));
        this.dp_1.wn(_Char___init__impl__6a9atx(58));
        this.dp_1.vn();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).bf = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.ip_1.lm_1) {
      protoOf(AbstractEncoder).bf.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).pe = function () {
    this.dp_1.yn('null');
  };
  protoOf(StreamingJsonEncoder).qe = function (value) {
    if (this.jp_1) {
      this.te(value.toString());
    } else {
      this.dp_1.do(value);
    }
  };
  protoOf(StreamingJsonEncoder).re = function (value) {
    if (this.jp_1) {
      this.te(value.toString());
    } else {
      this.dp_1.bo(value);
    }
  };
  protoOf(StreamingJsonEncoder).se = function (value) {
    if (this.jp_1) {
      this.te(value.toString());
    } else {
      this.dp_1.ao(value);
    }
    if (!this.ip_1.qm_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.dp_1.pn_1));
    }
  };
  protoOf(StreamingJsonEncoder).te = function (value) {
    return this.dp_1.eo(value);
  };
  protoOf(StreamingJsonEncoder).ue = function (enumDescriptor, index) {
    this.te(enumDescriptor.kc(index));
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
    _this__u8e3s4.d6(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.m8(value, lastPos, i);
          _this__u8e3s4.c6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.m8(value, lastPos, value.length);
    } else {
      _this__u8e3s4.c6(value);
    }
    _this__u8e3s4.d6(_Char___init__impl__6a9atx(34));
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
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.zr()));
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
    this.wr_1 = json;
    this.xr_1 = value;
    this.yr_1 = this.wm().uk_1;
  }
  protoOf(AbstractJsonTreeDecoder).wm = function () {
    return this.wr_1;
  };
  protoOf(AbstractJsonTreeDecoder).f1 = function () {
    return this.xr_1;
  };
  protoOf(AbstractJsonTreeDecoder).je = function () {
    return this.wm().je();
  };
  protoOf(AbstractJsonTreeDecoder).zr = function () {
    var tmp0_safe_receiver = this.uj();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.as(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.f1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).xm = function () {
    return this.zr();
  };
  protoOf(AbstractJsonTreeDecoder).zd = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).vj = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).ae = function (descriptor) {
    var currentObject = this.zr();
    var tmp0_subject = descriptor.gc();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.wm();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.fc() + ', but had ' + toString(getKClassFromExpression(currentObject)));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.wm();
        var keyDescriptor = carrierDescriptor(descriptor.nc(0), this_0.je());
        var keyKind = keyDescriptor.gc();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.wm();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.fc() + ', but had ' + toString(getKClassFromExpression(currentObject)));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.uk_1.jm_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.wm();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.fc() + ', but had ' + toString(getKClassFromExpression(currentObject)));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.wm();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.fc() + ', but had ' + toString(getKClassFromExpression(currentObject)));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).be = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).rd = function () {
    var tmp = this.zr();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).bs = function (tag) {
    var currentElement = this.as(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + toString(currentElement), toString(this.zr()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).cs = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.wm(), this.bs(tag).dn());
  };
  protoOf(AbstractJsonTreeDecoder).ck = function (tag, enumDescriptor) {
    return this.cs((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).ds = function (tag) {
    return !(this.as(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).xj = function (tag) {
    return this.ds((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).es = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.bs(tag);
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
  protoOf(AbstractJsonTreeDecoder).yj = function (tag) {
    return this.es((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).fs = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.bs(tag);
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
  protoOf(AbstractJsonTreeDecoder).zj = function (tag) {
    return this.fs((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).gs = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.bs(tag);
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
    var specialFp = this.wm().uk_1.qm_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.zr()));
  };
  protoOf(AbstractJsonTreeDecoder).ak = function (tag) {
    return this.gs((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).hs = function (tag) {
    var value = this.bs(tag);
    if (!this.wm().uk_1.im_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.en_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.zr()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.zr()));
    return value.dn();
  };
  protoOf(AbstractJsonTreeDecoder).bk = function (tag) {
    return this.hs((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.wm();
      if (!descriptor.oc(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.nc(index);
      var tmp;
      if (!elementDescriptor.zb()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.as(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.gc(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.zb()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.as(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.as(tag);
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
    $this.rs_1 = (!$this.wm().uk_1.lm_1 && !descriptor.oc(index) && descriptor.nc(index).zb());
    return $this.rs_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.ns_1 = value;
    this.os_1 = polyDiscriminator;
    this.ps_1 = polyDescriptor;
    this.qs_1 = 0;
    this.rs_1 = false;
  }
  protoOf(JsonTreeDecoder).f1 = function () {
    return this.ns_1;
  };
  protoOf(JsonTreeDecoder).le = function (descriptor) {
    while (this.qs_1 < descriptor.ic()) {
      var tmp1 = this.qs_1;
      this.qs_1 = tmp1 + 1 | 0;
      var name = this.pj(descriptor, tmp1);
      var index = this.qs_1 - 1 | 0;
      this.rs_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.f1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).g1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.yr_1.nm_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).rd = function () {
    return !this.rs_1 && protoOf(AbstractJsonTreeDecoder).rd.call(this);
  };
  protoOf(JsonTreeDecoder).qj = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.wm());
    var baseName = descriptor.kc(index);
    if (strategy == null) {
      if (!this.yr_1.rm_1)
        return baseName;
      if (this.f1().i1().x(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.wm(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.f1().i1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.h1(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.to(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).as = function (tag) {
    return getValue(this.f1(), tag);
  };
  protoOf(JsonTreeDecoder).ae = function (descriptor) {
    if (descriptor === this.ps_1) {
      var tmp = this.wm();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.zr();
      var descriptor_0 = this.ps_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor_0.fc() + ', but had ' + toString(getKClassFromExpression(value)));
      }
      return new JsonTreeDecoder(tmp, value, this.os_1, this.ps_1);
    }
    return protoOf(AbstractJsonTreeDecoder).ae.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).be = function (descriptor) {
    var tmp;
    if (this.yr_1.hm_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.gc();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.wm());
    var tmp_1;
    if (strategy == null && !this.yr_1.rm_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.wm(), descriptor).i1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.wm()).dr(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.f1().i1().e();
    while (tmp1_iterator.f()) {
      var key = tmp1_iterator.g();
      if (!names.x(key) && !(key === this.os_1)) {
        throw UnknownKeyException(key, this.f1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.xs_1 = value;
    this.ys_1 = this.xs_1.h();
    this.zs_1 = -1;
  }
  protoOf(JsonTreeListDecoder).f1 = function () {
    return this.xs_1;
  };
  protoOf(JsonTreeListDecoder).qj = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).as = function (tag) {
    return this.xs_1.n(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).le = function (descriptor) {
    while (this.zs_1 < (this.ys_1 - 1 | 0)) {
      this.zs_1 = this.zs_1 + 1 | 0;
      return this.zs_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.kt_1 = value;
    this.lt_1 = toList(this.kt_1.i1());
    this.mt_1 = imul(this.lt_1.h(), 2);
    this.nt_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).f1 = function () {
    return this.kt_1;
  };
  protoOf(JsonTreeMapDecoder).qj = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.lt_1.n(i);
  };
  protoOf(JsonTreeMapDecoder).le = function (descriptor) {
    while (this.nt_1 < (this.mt_1 - 1 | 0)) {
      this.nt_1 = this.nt_1 + 1 | 0;
      return this.nt_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).as = function (tag) {
    return (this.nt_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.kt_1, tag);
  };
  protoOf(JsonTreeMapDecoder).be = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.sb())).zd(deserializer);
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
    this.qr_1 = begin;
    this.rr_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.gc();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.nc(0), _this__u8e3s4.je());
          var keyKind = keyDescriptor.gc();
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
            if (_this__u8e3s4.uk_1.jm_1) {
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
    if (equals(_this__u8e3s4.gc(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.hc()) {
      tmp = carrierDescriptor(_this__u8e3s4.nc(0), module_0);
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
    $this.ot(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.ot(lastPosition, currentPosition);
    var result = $this.ml_1.toString();
    $this.ml_1.q8(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.ll_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.ll_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.pt(), $this.jl_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.qt(currentPosition);
    if (currentPosition === -1) {
      $this.po('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.pt();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.pt(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.po("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.ml_1.d6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.jl_1 = startPos;
      $this.rt();
      if (($this.jl_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.po('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.jl_1);
    }
    $this.ml_1.d6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.po("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.qt(start);
    if (current >= charSequenceLength($this.pt()) || current === -1) {
      $this.po('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.pt();
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
        $this.po("Expected valid boolean literal prefix, but had '" + $this.tp() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.pt()) - current | 0) < literalSuffix.length) {
      $this.po('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.pt(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.po("Expected valid boolean literal prefix, but had '" + $this.tp() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.jl_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.c2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.c2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.jl_1 = 0;
    this.kl_1 = new JsonPath();
    this.ll_1 = null;
    this.ml_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).rt = function () {
  };
  protoOf(AbstractJsonLexer).st = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).nl = function () {
    var nextToken = this.vp();
    if (!(nextToken === 10)) {
      this.po('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.pt(), this.jl_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).pp = function (expected) {
    var token = this.vp();
    if (!(token === expected)) {
      this.tt(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).fr = function (expected) {
    this.rt();
    var source = this.pt();
    var cpos = this.jl_1;
    $l$loop_0: while (true) {
      cpos = this.qt(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.jl_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.ut(expected);
    }
    this.jl_1 = cpos;
    this.ut(expected);
  };
  protoOf(AbstractJsonLexer).ut = function (expected) {
    if (this.jl_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.jl_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.jl_1 = this.jl_1 - 1 | 0;
          tmp$ret$1 = this.tp();
          break $l$block;
        }finally {
          this.jl_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.oo("Expected string literal but 'null' literal was found", this.jl_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.tt(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).vt = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.jl_1 - 1 | 0 : this.jl_1;
    var s = this.jl_1 === charSequenceLength(this.pt()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.pt(), position));
    this.po('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).tt = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.vt(expectedToken, wasConsumed) : $super.vt.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).qp = function () {
    var source = this.pt();
    var cpos = this.jl_1;
    $l$loop_0: while (true) {
      cpos = this.qt(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.jl_1 = cpos;
      return charToTokenClass(ch);
    }
    this.jl_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).hr = function (doConsume) {
    var current = this.wt();
    current = this.qt(current);
    var len = charSequenceLength(this.pt()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.pt(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.pt(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.jl_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).sr = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.hr(doConsume) : $super.hr.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).wt = function () {
    var current = this.jl_1;
    $l$loop_0: while (true) {
      current = this.qt(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.pt(), current);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.jl_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).ir = function (isLenient) {
    var token = this.qp();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.tp();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.sp();
    }
    var string = tmp;
    this.ll_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).xt = function () {
    this.ll_1 = null;
  };
  protoOf(AbstractJsonLexer).yt = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.pt();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).sp = function () {
    if (!(this.ll_1 == null)) {
      return takePeeked(this);
    }
    return this.lr();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.qt(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.po('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.ot(lastPosition, currentPosition);
          currentPosition = this.qt(currentPosition);
          if (currentPosition === -1) {
            this.po('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.yt(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.jl_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).mr = function () {
    var result = this.tp();
    if (result === 'null' && wasUnquotedString(this)) {
      this.po("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).tp = function () {
    if (!(this.ll_1 == null)) {
      return takePeeked(this);
    }
    var current = this.wt();
    if (current >= charSequenceLength(this.pt()) || current === -1) {
      this.po('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.pt(), current));
    if (token === 1) {
      return this.sp();
    }
    if (!(token === 0)) {
      this.po('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.pt(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.pt(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.pt())) {
        usedAppend = true;
        this.ot(this.jl_1, current);
        var eof = this.qt(current);
        if (eof === -1) {
          this.jl_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.yt(this.jl_1, current);
    } else {
      tmp = decodedString(this, this.jl_1, current);
    }
    var result = tmp;
    this.jl_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).ot = function (fromIndex, toIndex) {
    this.ml_1.m8(this.pt(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).kr = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.qp();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.tp();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.qp();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.tp();
        } else {
          this.lr();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.m(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.jl_1, 'found ] instead of } at path: ' + this.kl_1.toString(), this.pt());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.jl_1, 'found } instead of ] at path: ' + this.kl_1.toString(), this.pt());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.po('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.vp();
      if (tokenStack.h() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.pt()) + "', currentPosition=" + this.jl_1 + ')';
  };
  protoOf(AbstractJsonLexer).jr = function (key) {
    var processed = this.yt(0, this.jl_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.oo("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).oo = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.kl_1.cp() + hintMessage, this.pt());
  };
  protoOf(AbstractJsonLexer).po = function (message, position, hint, $super) {
    position = position === VOID ? this.jl_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.oo(message, position, hint) : $super.oo.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).mn = function () {
    var current = this.wt();
    current = this.qt(current);
    if (current >= charSequenceLength(this.pt()) || current === -1) {
      this.po('EOF');
    }
    var tmp;
    if (charSequenceGet(this.pt(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.pt())) {
        this.po('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.pt()))) {
      var ch = charSequenceGet(this.pt(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.po('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.po("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.po("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.po("Unexpected symbol '-' in numeric literal");
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
        this.po("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.w1(toLong(10)).u1(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.w1(toLong(10)).v1(toLong(digit));
      if (accumulator.v(new Long(0, 0)) > 0) {
        this.po('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.po('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.po('EOF');
      }
      if (!(charSequenceGet(this.pt(), current) === _Char___init__impl__6a9atx(34))) {
        this.po('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.jl_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.c2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).c2() || doubleAccumulator < (new Long(0, -2147483648)).c2()) {
        this.po('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.po("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.y1();
    } else {
      this.po('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).tr = function () {
    var current = this.wt();
    if (current === charSequenceLength(this.pt())) {
      this.po('EOF');
    }
    var tmp;
    if (charSequenceGet(this.pt(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.jl_1 === charSequenceLength(this.pt())) {
        this.po('EOF');
      }
      if (!(charSequenceGet(this.pt(), this.jl_1) === _Char___init__impl__6a9atx(34))) {
        this.po('Expected closing quotation mark');
      }
      this.jl_1 = this.jl_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().au_1;
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
    return c < 117 ? CharMappings_getInstance().zt_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.zt_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.au_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.zt_1 = charArray(117);
    this.au_1 = new Int8Array(126);
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
    this.fu_1 = source;
  }
  protoOf(StringJsonLexer).pt = function () {
    return this.fu_1;
  };
  protoOf(StringJsonLexer).qt = function (position) {
    return position < this.fu_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).vp = function () {
    var source = this.fu_1;
    $l$loop: while (!(this.jl_1 === -1) && this.jl_1 < source.length) {
      var tmp1 = this.jl_1;
      this.jl_1 = tmp1 + 1 | 0;
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
  protoOf(StringJsonLexer).gr = function () {
    var current = this.wt();
    if (current === this.fu_1.length || current === -1)
      return false;
    if (charSequenceGet(this.fu_1, current) === _Char___init__impl__6a9atx(44)) {
      this.jl_1 = this.jl_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).rp = function () {
    var current = this.jl_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.fu_1.length) {
      var c = charSequenceGet(this.fu_1, current);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.jl_1 = current;
      return this.st(c);
    }
    this.jl_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).wt = function () {
    var current = this.jl_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.fu_1.length) {
      var c = charSequenceGet(this.fu_1, current);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.jl_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).fr = function (expected) {
    if (this.jl_1 === -1) {
      this.ut(expected);
    }
    var source = this.fu_1;
    $l$loop: while (this.jl_1 < source.length) {
      var tmp1 = this.jl_1;
      this.jl_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.ut(expected);
    }
    this.jl_1 = -1;
    this.ut(expected);
  };
  protoOf(StringJsonLexer).lr = function () {
    this.fr(_Char___init__impl__6a9atx(34));
    var current = this.jl_1;
    var closingQuote = indexOf(this.fu_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.tp();
      this.vt(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.fu_1, i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.fu_1, this.jl_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.jl_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.fu_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).nr = function (keyToMatch, isLenient) {
    var positionSnapshot = this.jl_1;
    try {
      if (!(this.vp() === 6))
        return null;
      var firstKey = this.ir(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.xt();
      if (!(this.vp() === 5))
        return null;
      return this.ir(isLenient);
    }finally {
      this.jl_1 = positionSnapshot;
      this.xt();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.wk_1;
  }
  function JsonToStringWriter() {
    this.zk_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).co = function (value) {
    this.zk_1.p8(value);
  };
  protoOf(JsonToStringWriter).xn = function (char) {
    this.zk_1.d6(char);
  };
  protoOf(JsonToStringWriter).zn = function (text) {
    this.zk_1.c6(text);
  };
  protoOf(JsonToStringWriter).fo = function (text) {
    printQuoted(this.zk_1, text);
  };
  protoOf(JsonToStringWriter).al = function () {
    this.zk_1.r8();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.zk_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(JsonArray).asJsReadonlyArrayView = asJsReadonlyArrayView;
  protoOf(PolymorphismValidator).qk = contextual;
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
