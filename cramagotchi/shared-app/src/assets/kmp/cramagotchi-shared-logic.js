(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cramagotchi:shared-logic'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cramagotchi:shared-logic'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'cramagotchi:shared-logic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'cramagotchi:shared-logic'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'cramagotchi:shared-logic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'cramagotchi:shared-logic'.");
    }
    globalThis['cramagotchi:shared-logic'] = factory(typeof globalThis['cramagotchi:shared-logic'] === 'undefined' ? {} : globalThis['cramagotchi:shared-logic'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var removePrefix = kotlin_kotlin.$_$.q4;
  var toIntOrNull = kotlin_kotlin.$_$.w4;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var maxOrNull = kotlin_kotlin.$_$.c2;
  var VOID = kotlin_kotlin.$_$.c;
  var coerceIn = kotlin_kotlin.$_$.g4;
  var numberToInt = kotlin_kotlin.$_$.w3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v;
  var charArrayOf = kotlin_kotlin.$_$.w2;
  var split = kotlin_kotlin.$_$.s4;
  var listOf = kotlin_kotlin.$_$.b2;
  var protoOf = kotlin_kotlin.$_$.z3;
  var THROW_CCE = kotlin_kotlin.$_$.f5;
  var isCharSequence = kotlin_kotlin.$_$.r3;
  var trim = kotlin_kotlin.$_$.y4;
  var toString = kotlin_kotlin.$_$.b4;
  var charSequenceLength = kotlin_kotlin.$_$.z2;
  var roundToInt = kotlin_kotlin.$_$.c4;
  var copyToArray = kotlin_kotlin.$_$.n1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var listOfNotNull = kotlin_kotlin.$_$.a2;
  var plus = kotlin_kotlin.$_$.f2;
  var minOrNull = kotlin_kotlin.$_$.d2;
  var to = kotlin_kotlin.$_$.r5;
  var compareTo = kotlin_kotlin.$_$.b3;
  var plus_0 = kotlin_kotlin.$_$.g2;
  var toMutableList = kotlin_kotlin.$_$.o2;
  var Collection = kotlin_kotlin.$_$.c1;
  var isInterface = kotlin_kotlin.$_$.s3;
  var initMetadataForObject = kotlin_kotlin.$_$.p3;
  var defineProp = kotlin_kotlin.$_$.c3;
  var THROW_IAE = kotlin_kotlin.$_$.g5;
  var Enum = kotlin_kotlin.$_$.b5;
  var initMetadataForClass = kotlin_kotlin.$_$.k3;
  var enumEntries = kotlin_kotlin.$_$.s2;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l3;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.y3;
  var getStringHashCode = kotlin_kotlin.$_$.i3;
  var getBooleanHashCode = kotlin_kotlin.$_$.f3;
  var getNumberHashCode = kotlin_kotlin.$_$.g3;
  var equals = kotlin_kotlin.$_$.d3;
  var getKClass = kotlin_kotlin.$_$.b;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var emptyList = kotlin_kotlin.$_$.o1;
  var hashCode = kotlin_kotlin.$_$.j3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Exception = kotlin_kotlin.$_$.c5;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CramagotchiEngine, 'CramagotchiEngine');
  initMetadataForClass(TaskWeight, 'TaskWeight', VOID, Enum);
  initMetadataForClass(MonsterStatus, 'MonsterStatus', VOID, Enum);
  initMetadataForClass(EvolutionStage, 'EvolutionStage', VOID, Enum);
  initMetadataForClass(ExamKind, 'ExamKind', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StudyTask, 'StudyTask', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Exam, 'Exam', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MonsterState, 'MonsterState', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CollectedMonster, 'CollectedMonster', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AppState, 'AppState', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForObject(StorageRepository, 'StorageRepository');
  //endregion
  function nextId($this, state) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = state.tasks;
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nextId.<anonymous>' call
      var tmp0_safe_receiver = toIntOrNull(removePrefix(element.id, 'task-'));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.m(tmp0_safe_receiver);
      }
    }
    var tmp0_elvis_lhs = maxOrNull(destination);
    var highest = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    return 'task-' + (highest + 1 | 0);
  }
  function nextExamId($this, state) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = state.exams;
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nextExamId.<anonymous>' call
      var tmp0_safe_receiver = toIntOrNull(removePrefix(element.id, 'exam-'));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.m(tmp0_safe_receiver);
      }
    }
    var tmp0_elvis_lhs = maxOrNull(destination);
    var highest = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    return 'exam-' + (highest + 1 | 0);
  }
  function feedMonster($this, monster, newXp, newStage, now) {
    var tmp;
    if (monster.status.equals(MonsterStatus_SLEEPING_getInstance())) {
      tmp = monster.copy(VOID, newXp, newStage, VOID, now);
    } else {
      tmp = monster.copy(VOID, newXp, newStage, MonsterStatus_EATING_getInstance(), now, now + 3000.0, now + 1503000.0);
    }
    return tmp;
  }
  function hueFrom($this, rng) {
    var unit = coerceIn(rng, 0.0, 0.999999);
    return numberToInt(unit * 360.0);
  }
  function unlockSpeciesForEvolution($this, state, oldStage, newStage, now, hueRng) {
    var next = state;
    var _iterator__ex2g4s = get_entries().e();
    while (_iterator__ex2g4s.f()) {
      var stage = _iterator__ex2g4s.g();
      if (stage.level > oldStage.level && stage.level <= newStage.level) {
        var stirred = (hueRng + stage.level * 0.13) % 1.0;
        next = $this.unlockCollectible(next, stage.k1_1, now, stirred);
      }
    }
    return next;
  }
  function isoDaysFromCivil($this, iso) {
    var parts = split(iso, charArrayOf([_Char___init__impl__6a9atx(45)]));
    if (!(parts.h() === 3))
      return null;
    var tmp0_elvis_lhs = toIntOrNull(parts.n(0));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var year = tmp;
    var tmp1_elvis_lhs = toIntOrNull(parts.n(1));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var month = tmp_0;
    var tmp2_elvis_lhs = toIntOrNull(parts.n(2));
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var day = tmp_1;
    if (!(1 <= month ? month <= 12 : false) || !(1 <= day ? day <= 31 : false))
      return null;
    var y = month <= 2 ? year - 1 | 0 : year;
    // Inline function 'kotlin.math.floor' call
    var x = y / 400.0;
    var era = Math.floor(x);
    var yoe = y - era * 400;
    var mp = (month + 9 | 0) % 12 | 0;
    // Inline function 'kotlin.math.floor' call
    var x_0 = (imul(153, mp) + 2 | 0) / 5.0;
    var doy = Math.floor(x_0) + day - 1;
    var tmp_2 = yoe * 365;
    // Inline function 'kotlin.math.floor' call
    var x_1 = yoe / 4.0;
    var tmp_3 = tmp_2 + Math.floor(x_1);
    // Inline function 'kotlin.math.floor' call
    var x_2 = yoe / 100.0;
    var doe = tmp_3 - Math.floor(x_2) + doy;
    return era * 146097 + doe - 719468;
  }
  function CramagotchiEngine() {
    this.ju_1 = 'task-';
    this.ku_1 = 'exam-';
    this.BASE_FINISH_XP = 25;
    this.lu_1 = 8.64E7;
  }
  protoOf(CramagotchiEngine).mu = function (monsterName, now, seedHueRng) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    return new AppState(tmp$ret$0, new MonsterState(monsterName, 0, EvolutionStage_EGG_getInstance(), MonsterStatus_IDLE_getInstance(), now), VOID, VOID, listOf(new CollectedMonster('EGG', hueFrom(this, seedHueRng), now)));
  };
  protoOf(CramagotchiEngine).createInitialState = function (monsterName, now, seedHueRng, $super) {
    seedHueRng = seedHueRng === VOID ? 0.5 : seedHueRng;
    return this.mu(monsterName, now, seedHueRng);
  };
  protoOf(CramagotchiEngine).nu = function (state, title, weight, now, subjectTag, estimatedMinutes) {
    var newTask = new StudyTask(nextId(this, state), title, subjectTag, weight, false, now, null, estimatedMinutes);
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = state.tasks;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [newTask];
    var tmp$ret$4 = tmp$ret$0.concat(tmp$ret$3);
    return state.copy(tmp$ret$4);
  };
  protoOf(CramagotchiEngine).addTask = function (state, title, weight, now, subjectTag, estimatedMinutes, $super) {
    subjectTag = subjectTag === VOID ? null : subjectTag;
    estimatedMinutes = estimatedMinutes === VOID ? null : estimatedMinutes;
    return this.nu(state, title, weight, now, subjectTag, estimatedMinutes);
  };
  protoOf(CramagotchiEngine).ou = function (state, taskId, title, weight, subjectTag, estimatedMinutes) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var this_0 = state.tasks;
      var inductionVariable = 0;
      var last = this_0.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.cramagotchi.engine.CramagotchiEngine.updateTask.<anonymous>' call
          if (this_0[index].id === taskId) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var taskIndex = tmp$ret$1;
    if (taskIndex === -1)
      return state;
    var task = state.tasks[taskIndex];
    if (task.completed)
      return state;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.trim' call
    var this_1 = toString(trim(isCharSequence(title) ? title : THROW_CCE()));
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.cramagotchi.engine.CramagotchiEngine.updateTask.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var trimmedTitle = tmp0_elvis_lhs == null ? task.title : tmp0_elvis_lhs;
    var tmp_0;
    if (estimatedMinutes == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.updateTask.<anonymous>' call
      if (estimatedMinutes > 0) {
        tmp_1 = estimatedMinutes;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var safeEstimate = tmp_0;
    var tmp_2;
    if (subjectTag == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp_2 = toString(trim(isCharSequence(subjectTag) ? subjectTag : THROW_CCE()));
    }
    var tmp3_safe_receiver = tmp_2;
    var tmp_3;
    if (tmp3_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_4;
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.updateTask.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp3_safe_receiver) > 0) {
        tmp_4 = tmp3_safe_receiver;
      } else {
        tmp_4 = null;
      }
      tmp_3 = tmp_4;
    }
    var cleanTag = tmp_3;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var updatedTasks = state.tasks.slice();
    updatedTasks[taskIndex] = task.copy(VOID, trimmedTitle, cleanTag, weight, VOID, VOID, VOID, safeEstimate);
    return state.copy(updatedTasks);
  };
  protoOf(CramagotchiEngine).updateTask = function (state, taskId, title, weight, subjectTag, estimatedMinutes, $super) {
    subjectTag = subjectTag === VOID ? null : subjectTag;
    estimatedMinutes = estimatedMinutes === VOID ? null : estimatedMinutes;
    return this.ou(state, taskId, title, weight, subjectTag, estimatedMinutes);
  };
  protoOf(CramagotchiEngine).pu = function (state, taskId, now, actualMinutes, rng, hueRng) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var this_0 = state.tasks;
      var inductionVariable = 0;
      var last = this_0.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.cramagotchi.engine.CramagotchiEngine.completeTask.<anonymous>' call
          if (this_0[index].id === taskId) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var taskIndex = tmp$ret$1;
    if (taskIndex === -1)
      return state;
    var task = state.tasks[taskIndex];
    if (task.completed)
      return state;
    var variation = 0.85 + 0.3 * coerceIn(rng, 0.0, 1.0);
    var estimate = task.estimatedMinutes;
    var tmp;
    var tmp_0;
    if (!(estimate == null) && !(actualMinutes == null)) {
      // Inline function 'kotlin.math.abs' call
      var x = actualMinutes - estimate;
      tmp_0 = Math.abs(x) <= 0.25 * estimate;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 1.5;
    } else {
      tmp = 1.0;
    }
    var accuracyBonus = tmp;
    var awardedXp = roundToInt(task.weight.xpValue * variation * accuracyBonus);
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var updatedTasks = state.tasks.slice();
    updatedTasks[taskIndex] = task.copy(VOID, VOID, VOID, VOID, true, VOID, now, VOID, awardedXp);
    var newXp = state.monster.xp + awardedXp | 0;
    var newStage = this.calculateEvolution(newXp);
    var next = state.copy(updatedTasks, feedMonster(this, state.monster, newXp, newStage, now));
    return unlockSpeciesForEvolution(this, next, state.monster.stage, newStage, now, hueRng);
  };
  protoOf(CramagotchiEngine).completeTask = function (state, taskId, now, actualMinutes, rng, hueRng, $super) {
    actualMinutes = actualMinutes === VOID ? null : actualMinutes;
    rng = rng === VOID ? 0.5 : rng;
    hueRng = hueRng === VOID ? 0.5 : hueRng;
    return this.pu(state, taskId, now, actualMinutes, rng, hueRng);
  };
  protoOf(CramagotchiEngine).deleteTask = function (state, taskId) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = state.tasks;
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.deleteTask.<anonymous>' call
      if (!(element.id === taskId) || element.completed) {
        destination.m(element);
      }
    }
    var tmp$ret$3 = copyToArray(destination);
    return state.copy(tmp$ret$3);
  };
  protoOf(CramagotchiEngine).evaluateTime = function (state, now) {
    var monster = state.monster;
    var newStatus = monster.status;
    var newEatingUntil = monster.eatingUntil;
    var newSleepUntil = monster.sleepUntil;
    if (newStatus.equals(MonsterStatus_EATING_getInstance())) {
      var eatingEnd = monster.eatingUntil;
      if (!(eatingEnd == null) && now > eatingEnd) {
        newStatus = MonsterStatus_SLEEPING_getInstance();
        newEatingUntil = null;
      }
    }
    if (newStatus.equals(MonsterStatus_SLEEPING_getInstance())) {
      var sleepEnd = monster.sleepUntil;
      if (!(sleepEnd == null) && now > sleepEnd) {
        newStatus = MonsterStatus_IDLE_getInstance();
        newSleepUntil = null;
      }
    }
    if (newStatus.equals(MonsterStatus_IDLE_getInstance())) {
      if (now - monster.lastFedAt > 8.64E7) {
        newStatus = MonsterStatus_HUNGRY_getInstance();
      }
    }
    return state.copy(VOID, monster.copy(VOID, VOID, VOID, newStatus, VOID, newEatingUntil, newSleepUntil));
  };
  protoOf(CramagotchiEngine).calculateEvolution = function (xp) {
    return xp >= 300 ? EvolutionStage_GRADUATED_BEAST_getInstance() : xp >= 150 ? EvolutionStage_SCHOLAR_getInstance() : xp >= 50 ? EvolutionStage_HATCHLING_getInstance() : EvolutionStage_EGG_getInstance();
  };
  protoOf(CramagotchiEngine).examCountdownDays = function (state, now) {
    var tmp0_elvis_lhs = state.examDateIso;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var iso = tmp;
    var tmp1_elvis_lhs = isoDaysFromCivil(this, iso);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var examDay = tmp_0;
    // Inline function 'kotlin.math.floor' call
    var x = now / 8.64E7;
    var todayDay = Math.floor(x);
    return numberToInt(examDay - todayDay);
  };
  protoOf(CramagotchiEngine).nearestExamDays = function (state, now) {
    // Inline function 'kotlin.math.floor' call
    var x = now / 8.64E7;
    var todayDay = Math.floor(x);
    // Inline function 'kotlin.collections.map' call
    var this_0 = state.exams;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.e();
    while (tmp0_iterator.f()) {
      var item = tmp0_iterator.g();
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestExamDays.<anonymous>' call
      var tmp$ret$1 = item.dateIso;
      destination.m(tmp$ret$1);
    }
    var dates = plus(destination, listOfNotNull(state.examDateIso));
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = dates.e();
    while (tmp0_iterator_0.f()) {
      var element = tmp0_iterator_0.g();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestExamDays.<anonymous>' call
      var tmp0_safe_receiver = isoDaysFromCivil(CramagotchiEngine_instance, element);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestExamDays.<anonymous>.<anonymous>' call
        tmp = numberToInt(tmp0_safe_receiver - todayDay);
      }
      var tmp0_safe_receiver_0 = tmp;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination_0.m(tmp0_safe_receiver_0);
      }
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = destination_0.e();
    while (tmp0_iterator_1.f()) {
      var element_0 = tmp0_iterator_1.g();
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestExamDays.<anonymous>' call
      if (element_0 >= 0) {
        destination_1.m(element_0);
      }
    }
    return minOrNull(destination_1);
  };
  protoOf(CramagotchiEngine).nearestUpcomingExam = function (state, now) {
    // Inline function 'kotlin.math.floor' call
    var x = now / 8.64E7;
    var todayDay = Math.floor(x);
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var this_0 = state.exams;
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this_0.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestUpcomingExam.<anonymous>' call
        var tmp0_safe_receiver = isoDaysFromCivil(CramagotchiEngine_instance, element.dateIso);
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestUpcomingExam.<anonymous>.<anonymous>' call
          tmp = numberToInt(tmp0_safe_receiver - todayDay);
        }
        var tmp1_safe_receiver = tmp;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestUpcomingExam.<anonymous>.<anonymous>' call
          if (tmp1_safe_receiver >= 0) {
            tmp_1 = tmp1_safe_receiver;
          } else {
            tmp_1 = null;
          }
          tmp_0 = tmp_1;
        }
        var tmp2_safe_receiver = tmp_0;
        var tmp_2;
        if (tmp2_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestUpcomingExam.<anonymous>.<anonymous>' call
          tmp_2 = to(element, tmp2_safe_receiver);
        }
        var tmp0_safe_receiver_0 = tmp_2;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination.m(tmp0_safe_receiver_0);
        }
      }
      var iterator = destination.e();
      if (!iterator.f()) {
        tmp$ret$11 = null;
        break $l$block_0;
      }
      var minElem = iterator.g();
      if (!iterator.f()) {
        tmp$ret$11 = minElem;
        break $l$block_0;
      }
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestUpcomingExam.<anonymous>' call
      var days = minElem.aa();
      var minValue = days;
      do {
        var e = iterator.g();
        // Inline function 'com.cramagotchi.engine.CramagotchiEngine.nearestUpcomingExam.<anonymous>' call
        var days_0 = e.aa();
        var v = days_0;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.f());
      tmp$ret$11 = minElem;
    }
    var tmp0_safe_receiver_1 = tmp$ret$11;
    return tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.x9_1;
  };
  protoOf(CramagotchiEngine).su = function (state, subjectTag, dateIso, now, kind) {
    var tmp = nextExamId(this, state);
    var tmp_0;
    if (subjectTag == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp_0 = toString(trim(isCharSequence(subjectTag) ? subjectTag : THROW_CCE()));
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.addExam.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp1_safe_receiver) > 0) {
        tmp_2 = tmp1_safe_receiver;
      } else {
        tmp_2 = null;
      }
      tmp_1 = tmp_2;
    }
    var exam = new Exam(tmp, tmp_1, dateIso, kind);
    return state.copy(VOID, VOID, VOID, plus_0(state.exams, exam));
  };
  protoOf(CramagotchiEngine).addExam = function (state, subjectTag, dateIso, now, kind, $super) {
    kind = kind === VOID ? ExamKind_DEADLINE_getInstance() : kind;
    return this.su(state, subjectTag, dateIso, now, kind);
  };
  protoOf(CramagotchiEngine).removeExam = function (state, examId) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = state.exams;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.removeExam.<anonymous>' call
      if (!(element.id === examId)) {
        destination.m(element);
      }
    }
    return state.copy(VOID, VOID, VOID, destination);
  };
  protoOf(CramagotchiEngine).tu = function (state, examId, subjectTag, dateIso, kind) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var tmp0_iterator = state.exams.e();
      while (tmp0_iterator.f()) {
        var item = tmp0_iterator.g();
        // Inline function 'com.cramagotchi.engine.CramagotchiEngine.updateExam.<anonymous>' call
        if (item.id === examId) {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    var index_0 = tmp$ret$1;
    if (index_0 === -1)
      return state;
    var updated = toMutableList(state.exams);
    var tmp = updated.n(index_0);
    var tmp_0;
    if (subjectTag == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp_0 = toString(trim(isCharSequence(subjectTag) ? subjectTag : THROW_CCE()));
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.updateExam.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp1_safe_receiver) > 0) {
        tmp_2 = tmp1_safe_receiver;
      } else {
        tmp_2 = null;
      }
      tmp_1 = tmp_2;
    }
    updated.k3(index_0, tmp.copy(VOID, tmp_1, dateIso, kind));
    return state.copy(VOID, VOID, VOID, updated);
  };
  protoOf(CramagotchiEngine).updateExam = function (state, examId, subjectTag, dateIso, kind, $super) {
    kind = kind === VOID ? ExamKind_DEADLINE_getInstance() : kind;
    return this.tu(state, examId, subjectTag, dateIso, kind);
  };
  protoOf(CramagotchiEngine).uu = function () {
    return this.BASE_FINISH_XP;
  };
  protoOf(CramagotchiEngine).earlyFinishXp = function (daysRemaining) {
    var bonus = daysRemaining <= 0 ? 0 : daysRemaining <= 2 ? 10 : daysRemaining <= 6 ? 20 : 35;
    return 25 + bonus | 0;
  };
  protoOf(CramagotchiEngine).vu = function (state, examId, now, hueRng) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = state.exams.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'com.cramagotchi.engine.CramagotchiEngine.finishExam.<anonymous>' call
        if (element.id === examId) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return state;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var exam = tmp;
    // Inline function 'kotlin.math.floor' call
    var x = now / 8.64E7;
    var todayDay = Math.floor(x);
    var tmp1_safe_receiver = isoDaysFromCivil(this, exam.dateIso);
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.finishExam.<anonymous>' call
      tmp_0 = numberToInt(tmp1_safe_receiver - todayDay);
    }
    var tmp2_elvis_lhs = tmp_0;
    var daysRemaining = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var newXp = state.monster.xp + this.earlyFinishXp(daysRemaining) | 0;
    var newStage = this.calculateEvolution(newXp);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = state.exams;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_0.e();
    while (tmp0_iterator_0.f()) {
      var element_0 = tmp0_iterator_0.g();
      // Inline function 'com.cramagotchi.engine.CramagotchiEngine.finishExam.<anonymous>' call
      if (!(element_0.id === examId)) {
        destination.m(element_0);
      }
    }
    var tmp4_monster = feedMonster(this, state.monster, newXp, newStage, now);
    var next = state.copy(VOID, tmp4_monster, VOID, destination);
    return unlockSpeciesForEvolution(this, next, state.monster.stage, newStage, now, hueRng);
  };
  protoOf(CramagotchiEngine).finishExam = function (state, examId, now, hueRng, $super) {
    hueRng = hueRng === VOID ? 0.5 : hueRng;
    return this.vu(state, examId, now, hueRng);
  };
  protoOf(CramagotchiEngine).wu = function (state, speciesId, now, hueRng) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = state.collection;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'com.cramagotchi.engine.CramagotchiEngine.unlockCollectible.<anonymous>' call
        if (element.speciesId === speciesId) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      return state;
    return state.copy(VOID, VOID, VOID, VOID, plus_0(state.collection, new CollectedMonster(speciesId, hueFrom(this, hueRng), now)));
  };
  protoOf(CramagotchiEngine).unlockCollectible = function (state, speciesId, now, hueRng, $super) {
    hueRng = hueRng === VOID ? 0.5 : hueRng;
    return this.wu(state, speciesId, now, hueRng);
  };
  var CramagotchiEngine_instance;
  function CramagotchiEngine_getInstance() {
    return CramagotchiEngine_instance;
  }
  var TaskWeight_SNACK_instance;
  var TaskWeight_MEAL_instance;
  function values() {
    return [TaskWeight_SNACK_getInstance(), TaskWeight_MEAL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SNACK':
        return TaskWeight_SNACK_getInstance();
      case 'MEAL':
        return TaskWeight_MEAL_getInstance();
      default:
        TaskWeight_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var TaskWeight_entriesInitialized;
  function TaskWeight_initEntries() {
    if (TaskWeight_entriesInitialized)
      return Unit_instance;
    TaskWeight_entriesInitialized = true;
    TaskWeight_SNACK_instance = new TaskWeight('SNACK', 0, 10);
    TaskWeight_MEAL_instance = new TaskWeight('MEAL', 1, 25);
  }
  function TaskWeight(name, ordinal, xpValue) {
    Enum.call(this, name, ordinal);
    this.xpValue = xpValue;
  }
  protoOf(TaskWeight).xu = function () {
    return this.xpValue;
  };
  var MonsterStatus_IDLE_instance;
  var MonsterStatus_HUNGRY_instance;
  var MonsterStatus_EATING_instance;
  var MonsterStatus_SLEEPING_instance;
  function values_0() {
    return [MonsterStatus_IDLE_getInstance(), MonsterStatus_HUNGRY_getInstance(), MonsterStatus_EATING_getInstance(), MonsterStatus_SLEEPING_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'IDLE':
        return MonsterStatus_IDLE_getInstance();
      case 'HUNGRY':
        return MonsterStatus_HUNGRY_getInstance();
      case 'EATING':
        return MonsterStatus_EATING_getInstance();
      case 'SLEEPING':
        return MonsterStatus_SLEEPING_getInstance();
      default:
        MonsterStatus_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var MonsterStatus_entriesInitialized;
  function MonsterStatus_initEntries() {
    if (MonsterStatus_entriesInitialized)
      return Unit_instance;
    MonsterStatus_entriesInitialized = true;
    MonsterStatus_IDLE_instance = new MonsterStatus('IDLE', 0);
    MonsterStatus_HUNGRY_instance = new MonsterStatus('HUNGRY', 1);
    MonsterStatus_EATING_instance = new MonsterStatus('EATING', 2);
    MonsterStatus_SLEEPING_instance = new MonsterStatus('SLEEPING', 3);
  }
  function MonsterStatus(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var EvolutionStage_EGG_instance;
  var EvolutionStage_HATCHLING_instance;
  var EvolutionStage_SCHOLAR_instance;
  var EvolutionStage_GRADUATED_BEAST_instance;
  function values_1() {
    return [EvolutionStage_EGG_getInstance(), EvolutionStage_HATCHLING_getInstance(), EvolutionStage_SCHOLAR_getInstance(), EvolutionStage_GRADUATED_BEAST_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'EGG':
        return EvolutionStage_EGG_getInstance();
      case 'HATCHLING':
        return EvolutionStage_HATCHLING_getInstance();
      case 'SCHOLAR':
        return EvolutionStage_SCHOLAR_getInstance();
      case 'GRADUATED_BEAST':
        return EvolutionStage_GRADUATED_BEAST_getInstance();
      default:
        EvolutionStage_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values_1());
    return $ENTRIES;
  }
  var EvolutionStage_entriesInitialized;
  function EvolutionStage_initEntries() {
    if (EvolutionStage_entriesInitialized)
      return Unit_instance;
    EvolutionStage_entriesInitialized = true;
    EvolutionStage_EGG_instance = new EvolutionStage('EGG', 0, 1, 0);
    EvolutionStage_HATCHLING_instance = new EvolutionStage('HATCHLING', 1, 2, 50);
    EvolutionStage_SCHOLAR_instance = new EvolutionStage('SCHOLAR', 2, 3, 150);
    EvolutionStage_GRADUATED_BEAST_instance = new EvolutionStage('GRADUATED_BEAST', 3, 4, 300);
  }
  var $ENTRIES;
  function EvolutionStage(name, ordinal, level, minXp) {
    Enum.call(this, name, ordinal);
    this.level = level;
    this.minXp = minXp;
  }
  protoOf(EvolutionStage).av = function () {
    return this.level;
  };
  protoOf(EvolutionStage).bv = function () {
    return this.minXp;
  };
  var ExamKind_DEADLINE_instance;
  var ExamKind_EXAM_instance;
  function values_2() {
    return [ExamKind_DEADLINE_getInstance(), ExamKind_EXAM_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'DEADLINE':
        return ExamKind_DEADLINE_getInstance();
      case 'EXAM':
        return ExamKind_EXAM_getInstance();
      default:
        ExamKind_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var ExamKind_entriesInitialized;
  function ExamKind_initEntries() {
    if (ExamKind_entriesInitialized)
      return Unit_instance;
    ExamKind_entriesInitialized = true;
    ExamKind_DEADLINE_instance = new ExamKind('DEADLINE', 0);
    ExamKind_EXAM_instance = new ExamKind('EXAM', 1);
  }
  function ExamKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ev_1 = [null, null, null, createSimpleEnumSerializer('com.cramagotchi.model.TaskWeight', values()), null, null, null, null, null];
  }
  protoOf(Companion).fv = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.StudyTask', this, 9);
    tmp0_serialDesc.ki('id', false);
    tmp0_serialDesc.ki('title', false);
    tmp0_serialDesc.ki('subjectTag', true);
    tmp0_serialDesc.ki('weight', false);
    tmp0_serialDesc.ki('completed', true);
    tmp0_serialDesc.ki('createdAt', false);
    tmp0_serialDesc.ki('completedAt', true);
    tmp0_serialDesc.ki('estimatedMinutes', true);
    tmp0_serialDesc.ki('awardedXp', true);
    this.gv_1 = tmp0_serialDesc;
  }
  protoOf($serializer).hv = function (encoder, value) {
    var tmp0_desc = this.gv_1;
    var tmp1_output = encoder.be(tmp0_desc);
    var tmp2_cached = Companion_getInstance().ev_1;
    tmp1_output.ze(tmp0_desc, 0, value.id);
    tmp1_output.ze(tmp0_desc, 1, value.title);
    if (tmp1_output.gf(tmp0_desc, 2) ? true : !(value.subjectTag == null)) {
      tmp1_output.cf(tmp0_desc, 2, StringSerializer_getInstance(), value.subjectTag);
    }
    tmp1_output.af(tmp0_desc, 3, tmp2_cached[3], value.weight);
    if (tmp1_output.gf(tmp0_desc, 4) ? true : !(value.completed === false)) {
      tmp1_output.we(tmp0_desc, 4, value.completed);
    }
    tmp1_output.ye(tmp0_desc, 5, value.createdAt);
    if (tmp1_output.gf(tmp0_desc, 6) ? true : !(value.completedAt == null)) {
      tmp1_output.cf(tmp0_desc, 6, DoubleSerializer_getInstance(), value.completedAt);
    }
    if (tmp1_output.gf(tmp0_desc, 7) ? true : !(value.estimatedMinutes == null)) {
      tmp1_output.cf(tmp0_desc, 7, DoubleSerializer_getInstance(), value.estimatedMinutes);
    }
    if (tmp1_output.gf(tmp0_desc, 8) ? true : !(value.awardedXp == null)) {
      tmp1_output.cf(tmp0_desc, 8, IntSerializer_getInstance(), value.awardedXp);
    }
    tmp1_output.ce(tmp0_desc);
  };
  protoOf($serializer).ub = function (encoder, value) {
    return this.hv(encoder, value instanceof StudyTask ? value : THROW_CCE());
  };
  protoOf($serializer).vb = function (decoder) {
    var tmp0_desc = this.gv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = 0.0;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.be(tmp0_desc);
    var tmp14_cached = Companion_getInstance().ev_1;
    if (tmp13_input.le()) {
      tmp4_local0 = tmp13_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ge(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.je(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.he(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.de(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.fe(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.je(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.je(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.je(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.me(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ge(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.je(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.he(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.de(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.fe(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.je(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.je(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.je(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.ce(tmp0_desc);
    return StudyTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).tb = function () {
    return this.gv_1;
  };
  protoOf($serializer).zi = function () {
    var tmp0_cached = Companion_getInstance().ev_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3], BooleanSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function StudyTask_init_$Init$(seen0, id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp, serializationConstructorMarker, $this) {
    if (!(43 === (43 & seen0))) {
      throwMissingFieldException(seen0, 43, $serializer_getInstance().gv_1);
    }
    $this.id = id;
    $this.title = title;
    if (0 === (seen0 & 4))
      $this.subjectTag = null;
    else
      $this.subjectTag = subjectTag;
    $this.weight = weight;
    if (0 === (seen0 & 16))
      $this.completed = false;
    else
      $this.completed = completed;
    $this.createdAt = createdAt;
    if (0 === (seen0 & 64))
      $this.completedAt = null;
    else
      $this.completedAt = completedAt;
    if (0 === (seen0 & 128))
      $this.estimatedMinutes = null;
    else
      $this.estimatedMinutes = estimatedMinutes;
    if (0 === (seen0 & 256))
      $this.awardedXp = null;
    else
      $this.awardedXp = awardedXp;
    return $this;
  }
  function StudyTask_init_$Create$(seen0, id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp, serializationConstructorMarker) {
    return StudyTask_init_$Init$(seen0, id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp, serializationConstructorMarker, objectCreate(protoOf(StudyTask)));
  }
  function StudyTask(id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp) {
    Companion_getInstance();
    subjectTag = subjectTag === VOID ? null : subjectTag;
    completed = completed === VOID ? false : completed;
    completedAt = completedAt === VOID ? null : completedAt;
    estimatedMinutes = estimatedMinutes === VOID ? null : estimatedMinutes;
    awardedXp = awardedXp === VOID ? null : awardedXp;
    this.id = id;
    this.title = title;
    this.subjectTag = subjectTag;
    this.weight = weight;
    this.completed = completed;
    this.createdAt = createdAt;
    this.completedAt = completedAt;
    this.estimatedMinutes = estimatedMinutes;
    this.awardedXp = awardedXp;
  }
  protoOf(StudyTask).iv = function () {
    return this.id;
  };
  protoOf(StudyTask).jv = function () {
    return this.title;
  };
  protoOf(StudyTask).kv = function () {
    return this.subjectTag;
  };
  protoOf(StudyTask).lv = function () {
    return this.weight;
  };
  protoOf(StudyTask).mv = function () {
    return this.completed;
  };
  protoOf(StudyTask).nv = function () {
    return this.createdAt;
  };
  protoOf(StudyTask).ov = function () {
    return this.completedAt;
  };
  protoOf(StudyTask).pv = function () {
    return this.estimatedMinutes;
  };
  protoOf(StudyTask).qv = function () {
    return this.awardedXp;
  };
  protoOf(StudyTask).z9 = function () {
    return this.id;
  };
  protoOf(StudyTask).aa = function () {
    return this.title;
  };
  protoOf(StudyTask).rv = function () {
    return this.subjectTag;
  };
  protoOf(StudyTask).sv = function () {
    return this.weight;
  };
  protoOf(StudyTask).tv = function () {
    return this.completed;
  };
  protoOf(StudyTask).uv = function () {
    return this.createdAt;
  };
  protoOf(StudyTask).vv = function () {
    return this.completedAt;
  };
  protoOf(StudyTask).wv = function () {
    return this.estimatedMinutes;
  };
  protoOf(StudyTask).xv = function () {
    return this.awardedXp;
  };
  protoOf(StudyTask).yv = function (id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp) {
    return new StudyTask(id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp);
  };
  protoOf(StudyTask).copy = function (id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp, $super) {
    id = id === VOID ? this.id : id;
    title = title === VOID ? this.title : title;
    subjectTag = subjectTag === VOID ? this.subjectTag : subjectTag;
    weight = weight === VOID ? this.weight : weight;
    completed = completed === VOID ? this.completed : completed;
    createdAt = createdAt === VOID ? this.createdAt : createdAt;
    completedAt = completedAt === VOID ? this.completedAt : completedAt;
    estimatedMinutes = estimatedMinutes === VOID ? this.estimatedMinutes : estimatedMinutes;
    awardedXp = awardedXp === VOID ? this.awardedXp : awardedXp;
    return this.yv(id, title, subjectTag, weight, completed, createdAt, completedAt, estimatedMinutes, awardedXp);
  };
  protoOf(StudyTask).toString = function () {
    return 'StudyTask(id=' + this.id + ', title=' + this.title + ', subjectTag=' + this.subjectTag + ', weight=' + this.weight.toString() + ', completed=' + this.completed + ', createdAt=' + this.createdAt + ', completedAt=' + this.completedAt + ', estimatedMinutes=' + this.estimatedMinutes + ', awardedXp=' + this.awardedXp + ')';
  };
  protoOf(StudyTask).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.title) | 0;
    result = imul(result, 31) + (this.subjectTag == null ? 0 : getStringHashCode(this.subjectTag)) | 0;
    result = imul(result, 31) + this.weight.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.completed) | 0;
    result = imul(result, 31) + getNumberHashCode(this.createdAt) | 0;
    result = imul(result, 31) + (this.completedAt == null ? 0 : getNumberHashCode(this.completedAt)) | 0;
    result = imul(result, 31) + (this.estimatedMinutes == null ? 0 : getNumberHashCode(this.estimatedMinutes)) | 0;
    result = imul(result, 31) + (this.awardedXp == null ? 0 : this.awardedXp) | 0;
    return result;
  };
  protoOf(StudyTask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StudyTask))
      return false;
    var tmp0_other_with_cast = other instanceof StudyTask ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.title === tmp0_other_with_cast.title))
      return false;
    if (!(this.subjectTag == tmp0_other_with_cast.subjectTag))
      return false;
    if (!this.weight.equals(tmp0_other_with_cast.weight))
      return false;
    if (!(this.completed === tmp0_other_with_cast.completed))
      return false;
    if (!equals(this.createdAt, tmp0_other_with_cast.createdAt))
      return false;
    if (!equals(this.completedAt, tmp0_other_with_cast.completedAt))
      return false;
    if (!equals(this.estimatedMinutes, tmp0_other_with_cast.estimatedMinutes))
      return false;
    if (!(this.awardedXp == tmp0_other_with_cast.awardedXp))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zv_1 = [null, null, null, createSimpleEnumSerializer('com.cramagotchi.model.ExamKind', values_2())];
  }
  protoOf(Companion_0).fv = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.Exam', this, 4);
    tmp0_serialDesc.ki('id', false);
    tmp0_serialDesc.ki('subjectTag', true);
    tmp0_serialDesc.ki('dateIso', false);
    tmp0_serialDesc.ki('kind', true);
    this.aw_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).bw = function (encoder, value) {
    var tmp0_desc = this.aw_1;
    var tmp1_output = encoder.be(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().zv_1;
    tmp1_output.ze(tmp0_desc, 0, value.id);
    if (tmp1_output.gf(tmp0_desc, 1) ? true : !(value.subjectTag == null)) {
      tmp1_output.cf(tmp0_desc, 1, StringSerializer_getInstance(), value.subjectTag);
    }
    tmp1_output.ze(tmp0_desc, 2, value.dateIso);
    if (tmp1_output.gf(tmp0_desc, 3) ? true : !value.kind.equals(ExamKind_DEADLINE_getInstance())) {
      tmp1_output.af(tmp0_desc, 3, tmp2_cached[3], value.kind);
    }
    tmp1_output.ce(tmp0_desc);
  };
  protoOf($serializer_0).ub = function (encoder, value) {
    return this.bw(encoder, value instanceof Exam ? value : THROW_CCE());
  };
  protoOf($serializer_0).vb = function (decoder) {
    var tmp0_desc = this.aw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.be(tmp0_desc);
    var tmp9_cached = Companion_getInstance_0().zv_1;
    if (tmp8_input.le()) {
      tmp4_local0 = tmp8_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.je(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ge(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.he(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.me(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.je(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ge(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.he(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.ce(tmp0_desc);
    return Exam_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_0).tb = function () {
    return this.aw_1;
  };
  protoOf($serializer_0).zi = function () {
    var tmp0_cached = Companion_getInstance_0().zv_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[3]];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Exam_init_$Init$(seen0, id, subjectTag, dateIso, kind, serializationConstructorMarker, $this) {
    if (!(5 === (5 & seen0))) {
      throwMissingFieldException(seen0, 5, $serializer_getInstance_0().aw_1);
    }
    $this.id = id;
    if (0 === (seen0 & 2))
      $this.subjectTag = null;
    else
      $this.subjectTag = subjectTag;
    $this.dateIso = dateIso;
    if (0 === (seen0 & 8))
      $this.kind = ExamKind_DEADLINE_getInstance();
    else
      $this.kind = kind;
    return $this;
  }
  function Exam_init_$Create$(seen0, id, subjectTag, dateIso, kind, serializationConstructorMarker) {
    return Exam_init_$Init$(seen0, id, subjectTag, dateIso, kind, serializationConstructorMarker, objectCreate(protoOf(Exam)));
  }
  function Exam(id, subjectTag, dateIso, kind) {
    Companion_getInstance_0();
    subjectTag = subjectTag === VOID ? null : subjectTag;
    kind = kind === VOID ? ExamKind_DEADLINE_getInstance() : kind;
    this.id = id;
    this.subjectTag = subjectTag;
    this.dateIso = dateIso;
    this.kind = kind;
  }
  protoOf(Exam).iv = function () {
    return this.id;
  };
  protoOf(Exam).kv = function () {
    return this.subjectTag;
  };
  protoOf(Exam).cw = function () {
    return this.dateIso;
  };
  protoOf(Exam).hc = function () {
    return this.kind;
  };
  protoOf(Exam).z9 = function () {
    return this.id;
  };
  protoOf(Exam).aa = function () {
    return this.subjectTag;
  };
  protoOf(Exam).rv = function () {
    return this.dateIso;
  };
  protoOf(Exam).sv = function () {
    return this.kind;
  };
  protoOf(Exam).dw = function (id, subjectTag, dateIso, kind) {
    return new Exam(id, subjectTag, dateIso, kind);
  };
  protoOf(Exam).copy = function (id, subjectTag, dateIso, kind, $super) {
    id = id === VOID ? this.id : id;
    subjectTag = subjectTag === VOID ? this.subjectTag : subjectTag;
    dateIso = dateIso === VOID ? this.dateIso : dateIso;
    kind = kind === VOID ? this.kind : kind;
    return this.dw(id, subjectTag, dateIso, kind);
  };
  protoOf(Exam).toString = function () {
    return 'Exam(id=' + this.id + ', subjectTag=' + this.subjectTag + ', dateIso=' + this.dateIso + ', kind=' + this.kind.toString() + ')';
  };
  protoOf(Exam).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + (this.subjectTag == null ? 0 : getStringHashCode(this.subjectTag)) | 0;
    result = imul(result, 31) + getStringHashCode(this.dateIso) | 0;
    result = imul(result, 31) + this.kind.hashCode() | 0;
    return result;
  };
  protoOf(Exam).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Exam))
      return false;
    var tmp0_other_with_cast = other instanceof Exam ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.subjectTag == tmp0_other_with_cast.subjectTag))
      return false;
    if (!(this.dateIso === tmp0_other_with_cast.dateIso))
      return false;
    if (!this.kind.equals(tmp0_other_with_cast.kind))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ew_1 = [null, null, createSimpleEnumSerializer('com.cramagotchi.model.EvolutionStage', values_1()), createSimpleEnumSerializer('com.cramagotchi.model.MonsterStatus', values_0()), null, null, null];
  }
  protoOf(Companion_1).fv = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.MonsterState', this, 7);
    tmp0_serialDesc.ki('name', true);
    tmp0_serialDesc.ki('xp', true);
    tmp0_serialDesc.ki('stage', true);
    tmp0_serialDesc.ki('status', true);
    tmp0_serialDesc.ki('lastFedAt', false);
    tmp0_serialDesc.ki('eatingUntil', true);
    tmp0_serialDesc.ki('sleepUntil', true);
    this.fw_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).gw = function (encoder, value) {
    var tmp0_desc = this.fw_1;
    var tmp1_output = encoder.be(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().ew_1;
    if (tmp1_output.gf(tmp0_desc, 0) ? true : !(value.name === 'Munch')) {
      tmp1_output.ze(tmp0_desc, 0, value.name);
    }
    if (tmp1_output.gf(tmp0_desc, 1) ? true : !(value.xp === 0)) {
      tmp1_output.xe(tmp0_desc, 1, value.xp);
    }
    if (tmp1_output.gf(tmp0_desc, 2) ? true : !value.stage.equals(EvolutionStage_EGG_getInstance())) {
      tmp1_output.af(tmp0_desc, 2, tmp2_cached[2], value.stage);
    }
    if (tmp1_output.gf(tmp0_desc, 3) ? true : !value.status.equals(MonsterStatus_IDLE_getInstance())) {
      tmp1_output.af(tmp0_desc, 3, tmp2_cached[3], value.status);
    }
    tmp1_output.ye(tmp0_desc, 4, value.lastFedAt);
    if (tmp1_output.gf(tmp0_desc, 5) ? true : !(value.eatingUntil == null)) {
      tmp1_output.cf(tmp0_desc, 5, DoubleSerializer_getInstance(), value.eatingUntil);
    }
    if (tmp1_output.gf(tmp0_desc, 6) ? true : !(value.sleepUntil == null)) {
      tmp1_output.cf(tmp0_desc, 6, DoubleSerializer_getInstance(), value.sleepUntil);
    }
    tmp1_output.ce(tmp0_desc);
  };
  protoOf($serializer_1).ub = function (encoder, value) {
    return this.gw(encoder, value instanceof MonsterState ? value : THROW_CCE());
  };
  protoOf($serializer_1).vb = function (decoder) {
    var tmp0_desc = this.fw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0.0;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.be(tmp0_desc);
    var tmp12_cached = Companion_getInstance_1().ew_1;
    if (tmp11_input.le()) {
      tmp4_local0 = tmp11_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ee(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.he(tmp0_desc, 2, tmp12_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.he(tmp0_desc, 3, tmp12_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.fe(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.je(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.je(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.me(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ee(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.he(tmp0_desc, 2, tmp12_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.he(tmp0_desc, 3, tmp12_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.fe(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.je(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.je(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.ce(tmp0_desc);
    return MonsterState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_1).tb = function () {
    return this.fw_1;
  };
  protoOf($serializer_1).zi = function () {
    var tmp0_cached = Companion_getInstance_1().ew_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], DoubleSerializer_getInstance(), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function MonsterState_init_$Init$(seen0, name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil, serializationConstructorMarker, $this) {
    if (!(16 === (16 & seen0))) {
      throwMissingFieldException(seen0, 16, $serializer_getInstance_1().fw_1);
    }
    if (0 === (seen0 & 1))
      $this.name = 'Munch';
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.xp = 0;
    else
      $this.xp = xp;
    if (0 === (seen0 & 4))
      $this.stage = EvolutionStage_EGG_getInstance();
    else
      $this.stage = stage;
    if (0 === (seen0 & 8))
      $this.status = MonsterStatus_IDLE_getInstance();
    else
      $this.status = status;
    $this.lastFedAt = lastFedAt;
    if (0 === (seen0 & 32))
      $this.eatingUntil = null;
    else
      $this.eatingUntil = eatingUntil;
    if (0 === (seen0 & 64))
      $this.sleepUntil = null;
    else
      $this.sleepUntil = sleepUntil;
    return $this;
  }
  function MonsterState_init_$Create$(seen0, name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil, serializationConstructorMarker) {
    return MonsterState_init_$Init$(seen0, name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil, serializationConstructorMarker, objectCreate(protoOf(MonsterState)));
  }
  function MonsterState(name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil) {
    Companion_getInstance_1();
    name = name === VOID ? 'Munch' : name;
    xp = xp === VOID ? 0 : xp;
    stage = stage === VOID ? EvolutionStage_EGG_getInstance() : stage;
    status = status === VOID ? MonsterStatus_IDLE_getInstance() : status;
    eatingUntil = eatingUntil === VOID ? null : eatingUntil;
    sleepUntil = sleepUntil === VOID ? null : sleepUntil;
    this.name = name;
    this.xp = xp;
    this.stage = stage;
    this.status = status;
    this.lastFedAt = lastFedAt;
    this.eatingUntil = eatingUntil;
    this.sleepUntil = sleepUntil;
  }
  protoOf(MonsterState).m1 = function () {
    return this.name;
  };
  protoOf(MonsterState).hw = function () {
    return this.xp;
  };
  protoOf(MonsterState).iw = function () {
    return this.stage;
  };
  protoOf(MonsterState).jw = function () {
    return this.status;
  };
  protoOf(MonsterState).kw = function () {
    return this.lastFedAt;
  };
  protoOf(MonsterState).lw = function () {
    return this.eatingUntil;
  };
  protoOf(MonsterState).mw = function () {
    return this.sleepUntil;
  };
  protoOf(MonsterState).z9 = function () {
    return this.name;
  };
  protoOf(MonsterState).aa = function () {
    return this.xp;
  };
  protoOf(MonsterState).rv = function () {
    return this.stage;
  };
  protoOf(MonsterState).sv = function () {
    return this.status;
  };
  protoOf(MonsterState).tv = function () {
    return this.lastFedAt;
  };
  protoOf(MonsterState).uv = function () {
    return this.eatingUntil;
  };
  protoOf(MonsterState).vv = function () {
    return this.sleepUntil;
  };
  protoOf(MonsterState).nw = function (name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil) {
    return new MonsterState(name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil);
  };
  protoOf(MonsterState).copy = function (name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil, $super) {
    name = name === VOID ? this.name : name;
    xp = xp === VOID ? this.xp : xp;
    stage = stage === VOID ? this.stage : stage;
    status = status === VOID ? this.status : status;
    lastFedAt = lastFedAt === VOID ? this.lastFedAt : lastFedAt;
    eatingUntil = eatingUntil === VOID ? this.eatingUntil : eatingUntil;
    sleepUntil = sleepUntil === VOID ? this.sleepUntil : sleepUntil;
    return this.nw(name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil);
  };
  protoOf(MonsterState).toString = function () {
    return 'MonsterState(name=' + this.name + ', xp=' + this.xp + ', stage=' + this.stage.toString() + ', status=' + this.status.toString() + ', lastFedAt=' + this.lastFedAt + ', eatingUntil=' + this.eatingUntil + ', sleepUntil=' + this.sleepUntil + ')';
  };
  protoOf(MonsterState).hashCode = function () {
    var result = getStringHashCode(this.name);
    result = imul(result, 31) + this.xp | 0;
    result = imul(result, 31) + this.stage.hashCode() | 0;
    result = imul(result, 31) + this.status.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.lastFedAt) | 0;
    result = imul(result, 31) + (this.eatingUntil == null ? 0 : getNumberHashCode(this.eatingUntil)) | 0;
    result = imul(result, 31) + (this.sleepUntil == null ? 0 : getNumberHashCode(this.sleepUntil)) | 0;
    return result;
  };
  protoOf(MonsterState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MonsterState))
      return false;
    var tmp0_other_with_cast = other instanceof MonsterState ? other : THROW_CCE();
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.xp === tmp0_other_with_cast.xp))
      return false;
    if (!this.stage.equals(tmp0_other_with_cast.stage))
      return false;
    if (!this.status.equals(tmp0_other_with_cast.status))
      return false;
    if (!equals(this.lastFedAt, tmp0_other_with_cast.lastFedAt))
      return false;
    if (!equals(this.eatingUntil, tmp0_other_with_cast.eatingUntil))
      return false;
    if (!equals(this.sleepUntil, tmp0_other_with_cast.sleepUntil))
      return false;
    return true;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).fv = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.CollectedMonster', this, 3);
    tmp0_serialDesc.ki('speciesId', false);
    tmp0_serialDesc.ki('hue', false);
    tmp0_serialDesc.ki('collectedAt', false);
    this.ow_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).pw = function (encoder, value) {
    var tmp0_desc = this.ow_1;
    var tmp1_output = encoder.be(tmp0_desc);
    tmp1_output.ze(tmp0_desc, 0, value.speciesId);
    tmp1_output.xe(tmp0_desc, 1, value.hue);
    tmp1_output.ye(tmp0_desc, 2, value.collectedAt);
    tmp1_output.ce(tmp0_desc);
  };
  protoOf($serializer_2).ub = function (encoder, value) {
    return this.pw(encoder, value instanceof CollectedMonster ? value : THROW_CCE());
  };
  protoOf($serializer_2).vb = function (decoder) {
    var tmp0_desc = this.ow_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0.0;
    var tmp7_input = decoder.be(tmp0_desc);
    if (tmp7_input.le()) {
      tmp4_local0 = tmp7_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ee(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.fe(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.me(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ee(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.fe(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.ce(tmp0_desc);
    return CollectedMonster_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_2).tb = function () {
    return this.ow_1;
  };
  protoOf($serializer_2).zi = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function CollectedMonster_init_$Init$(seen0, speciesId, hue, collectedAt, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().ow_1);
    }
    $this.speciesId = speciesId;
    $this.hue = hue;
    $this.collectedAt = collectedAt;
    return $this;
  }
  function CollectedMonster_init_$Create$(seen0, speciesId, hue, collectedAt, serializationConstructorMarker) {
    return CollectedMonster_init_$Init$(seen0, speciesId, hue, collectedAt, serializationConstructorMarker, objectCreate(protoOf(CollectedMonster)));
  }
  function CollectedMonster(speciesId, hue, collectedAt) {
    this.speciesId = speciesId;
    this.hue = hue;
    this.collectedAt = collectedAt;
  }
  protoOf(CollectedMonster).qw = function () {
    return this.speciesId;
  };
  protoOf(CollectedMonster).rw = function () {
    return this.hue;
  };
  protoOf(CollectedMonster).sw = function () {
    return this.collectedAt;
  };
  protoOf(CollectedMonster).z9 = function () {
    return this.speciesId;
  };
  protoOf(CollectedMonster).aa = function () {
    return this.hue;
  };
  protoOf(CollectedMonster).rv = function () {
    return this.collectedAt;
  };
  protoOf(CollectedMonster).tw = function (speciesId, hue, collectedAt) {
    return new CollectedMonster(speciesId, hue, collectedAt);
  };
  protoOf(CollectedMonster).copy = function (speciesId, hue, collectedAt, $super) {
    speciesId = speciesId === VOID ? this.speciesId : speciesId;
    hue = hue === VOID ? this.hue : hue;
    collectedAt = collectedAt === VOID ? this.collectedAt : collectedAt;
    return this.tw(speciesId, hue, collectedAt);
  };
  protoOf(CollectedMonster).toString = function () {
    return 'CollectedMonster(speciesId=' + this.speciesId + ', hue=' + this.hue + ', collectedAt=' + this.collectedAt + ')';
  };
  protoOf(CollectedMonster).hashCode = function () {
    var result = getStringHashCode(this.speciesId);
    result = imul(result, 31) + this.hue | 0;
    result = imul(result, 31) + getNumberHashCode(this.collectedAt) | 0;
    return result;
  };
  protoOf(CollectedMonster).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CollectedMonster))
      return false;
    var tmp0_other_with_cast = other instanceof CollectedMonster ? other : THROW_CCE();
    if (!(this.speciesId === tmp0_other_with_cast.speciesId))
      return false;
    if (!(this.hue === tmp0_other_with_cast.hue))
      return false;
    if (!equals(this.collectedAt, tmp0_other_with_cast.collectedAt))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.uw_1 = [new ReferenceArraySerializer(getKClass(StudyTask), $serializer_getInstance()), null, null, new ArrayListSerializer($serializer_getInstance_0()), new ArrayListSerializer($serializer_getInstance_2())];
  }
  protoOf(Companion_3).fv = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.AppState', this, 5);
    tmp0_serialDesc.ki('tasks', true);
    tmp0_serialDesc.ki('monster', false);
    tmp0_serialDesc.ki('examDateIso', true);
    tmp0_serialDesc.ki('exams', true);
    tmp0_serialDesc.ki('collection', true);
    this.vw_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).ww = function (encoder, value) {
    var tmp0_desc = this.vw_1;
    var tmp1_output = encoder.be(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().uw_1;
    var tmp;
    if (tmp1_output.gf(tmp0_desc, 0)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      tmp = !equals(value.tasks, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.af(tmp0_desc, 0, tmp2_cached[0], value.tasks);
    }
    tmp1_output.af(tmp0_desc, 1, $serializer_getInstance_1(), value.monster);
    if (tmp1_output.gf(tmp0_desc, 2) ? true : !(value.examDateIso == null)) {
      tmp1_output.cf(tmp0_desc, 2, StringSerializer_getInstance(), value.examDateIso);
    }
    if (tmp1_output.gf(tmp0_desc, 3) ? true : !equals(value.exams, emptyList())) {
      tmp1_output.af(tmp0_desc, 3, tmp2_cached[3], value.exams);
    }
    if (tmp1_output.gf(tmp0_desc, 4) ? true : !equals(value.collection, emptyList())) {
      tmp1_output.af(tmp0_desc, 4, tmp2_cached[4], value.collection);
    }
    tmp1_output.ce(tmp0_desc);
  };
  protoOf($serializer_3).ub = function (encoder, value) {
    return this.ww(encoder, value instanceof AppState ? value : THROW_CCE());
  };
  protoOf($serializer_3).vb = function (decoder) {
    var tmp0_desc = this.vw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.be(tmp0_desc);
    var tmp10_cached = Companion_getInstance_3().uw_1;
    if (tmp9_input.le()) {
      tmp4_local0 = tmp9_input.he(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.he(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.je(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.he(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.he(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.me(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.he(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.he(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.je(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.he(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.he(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.ce(tmp0_desc);
    return AppState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_3).tb = function () {
    return this.vw_1;
  };
  protoOf($serializer_3).zi = function () {
    var tmp0_cached = Companion_getInstance_3().uw_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], $serializer_getInstance_1(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3], tmp0_cached[4]];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function AppState_init_$Init$(seen0, tasks, monster, examDateIso, exams, collection, serializationConstructorMarker, $this) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, $serializer_getInstance_3().vw_1);
    }
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.emptyArray' call
      tmp.tasks = [];
    } else
      $this.tasks = tasks;
    $this.monster = monster;
    if (0 === (seen0 & 4))
      $this.examDateIso = null;
    else
      $this.examDateIso = examDateIso;
    if (0 === (seen0 & 8))
      $this.exams = emptyList();
    else
      $this.exams = exams;
    if (0 === (seen0 & 16))
      $this.collection = emptyList();
    else
      $this.collection = collection;
    return $this;
  }
  function AppState_init_$Create$(seen0, tasks, monster, examDateIso, exams, collection, serializationConstructorMarker) {
    return AppState_init_$Init$(seen0, tasks, monster, examDateIso, exams, collection, serializationConstructorMarker, objectCreate(protoOf(AppState)));
  }
  function AppState(tasks, monster, examDateIso, exams, collection) {
    Companion_getInstance_3();
    var tmp;
    if (tasks === VOID) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tasks;
    }
    tasks = tmp;
    examDateIso = examDateIso === VOID ? null : examDateIso;
    exams = exams === VOID ? emptyList() : exams;
    collection = collection === VOID ? emptyList() : collection;
    this.tasks = tasks;
    this.monster = monster;
    this.examDateIso = examDateIso;
    this.exams = exams;
    this.collection = collection;
  }
  protoOf(AppState).xw = function () {
    return this.tasks;
  };
  protoOf(AppState).yw = function () {
    return this.monster;
  };
  protoOf(AppState).zw = function () {
    return this.examDateIso;
  };
  protoOf(AppState).ax = function () {
    return this.exams;
  };
  protoOf(AppState).bx = function () {
    return this.collection;
  };
  protoOf(AppState).z9 = function () {
    return this.tasks;
  };
  protoOf(AppState).aa = function () {
    return this.monster;
  };
  protoOf(AppState).rv = function () {
    return this.examDateIso;
  };
  protoOf(AppState).sv = function () {
    return this.exams;
  };
  protoOf(AppState).tv = function () {
    return this.collection;
  };
  protoOf(AppState).cx = function (tasks, monster, examDateIso, exams, collection) {
    return new AppState(tasks, monster, examDateIso, exams, collection);
  };
  protoOf(AppState).copy = function (tasks, monster, examDateIso, exams, collection, $super) {
    tasks = tasks === VOID ? this.tasks : tasks;
    monster = monster === VOID ? this.monster : monster;
    examDateIso = examDateIso === VOID ? this.examDateIso : examDateIso;
    exams = exams === VOID ? this.exams : exams;
    collection = collection === VOID ? this.collection : collection;
    return this.cx(tasks, monster, examDateIso, exams, collection);
  };
  protoOf(AppState).toString = function () {
    return 'AppState(tasks=' + toString(this.tasks) + ', monster=' + this.monster.toString() + ', examDateIso=' + this.examDateIso + ', exams=' + toString(this.exams) + ', collection=' + toString(this.collection) + ')';
  };
  protoOf(AppState).hashCode = function () {
    var result = hashCode(this.tasks);
    result = imul(result, 31) + this.monster.hashCode() | 0;
    result = imul(result, 31) + (this.examDateIso == null ? 0 : getStringHashCode(this.examDateIso)) | 0;
    result = imul(result, 31) + hashCode(this.exams) | 0;
    result = imul(result, 31) + hashCode(this.collection) | 0;
    return result;
  };
  protoOf(AppState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AppState))
      return false;
    var tmp0_other_with_cast = other instanceof AppState ? other : THROW_CCE();
    if (!equals(this.tasks, tmp0_other_with_cast.tasks))
      return false;
    if (!this.monster.equals(tmp0_other_with_cast.monster))
      return false;
    if (!(this.examDateIso == tmp0_other_with_cast.examDateIso))
      return false;
    if (!equals(this.exams, tmp0_other_with_cast.exams))
      return false;
    if (!equals(this.collection, tmp0_other_with_cast.collection))
      return false;
    return true;
  };
  function TaskWeight_SNACK_getInstance() {
    TaskWeight_initEntries();
    return TaskWeight_SNACK_instance;
  }
  function TaskWeight_MEAL_getInstance() {
    TaskWeight_initEntries();
    return TaskWeight_MEAL_instance;
  }
  function MonsterStatus_IDLE_getInstance() {
    MonsterStatus_initEntries();
    return MonsterStatus_IDLE_instance;
  }
  function MonsterStatus_HUNGRY_getInstance() {
    MonsterStatus_initEntries();
    return MonsterStatus_HUNGRY_instance;
  }
  function MonsterStatus_EATING_getInstance() {
    MonsterStatus_initEntries();
    return MonsterStatus_EATING_instance;
  }
  function MonsterStatus_SLEEPING_getInstance() {
    MonsterStatus_initEntries();
    return MonsterStatus_SLEEPING_instance;
  }
  function EvolutionStage_EGG_getInstance() {
    EvolutionStage_initEntries();
    return EvolutionStage_EGG_instance;
  }
  function EvolutionStage_HATCHLING_getInstance() {
    EvolutionStage_initEntries();
    return EvolutionStage_HATCHLING_instance;
  }
  function EvolutionStage_SCHOLAR_getInstance() {
    EvolutionStage_initEntries();
    return EvolutionStage_SCHOLAR_instance;
  }
  function EvolutionStage_GRADUATED_BEAST_getInstance() {
    EvolutionStage_initEntries();
    return EvolutionStage_GRADUATED_BEAST_instance;
  }
  function ExamKind_DEADLINE_getInstance() {
    ExamKind_initEntries();
    return ExamKind_DEADLINE_instance;
  }
  function ExamKind_EXAM_getInstance() {
    ExamKind_initEntries();
    return ExamKind_EXAM_instance;
  }
  function StorageRepository$json$lambda($this$Json) {
    $this$Json.rl_1 = true;
    $this$Json.pl_1 = true;
    return Unit_instance;
  }
  function StorageRepository() {
    StorageRepository_instance = this;
    this.STORAGE_KEY = 'cramagotchi_state';
    var tmp = this;
    tmp.dx_1 = Json(VOID, StorageRepository$json$lambda);
  }
  protoOf(StorageRepository).ex = function () {
    return this.STORAGE_KEY;
  };
  protoOf(StorageRepository).serialize = function (state) {
    return this.dx_1.yk(Companion_getInstance_3().fv(), state);
  };
  protoOf(StorageRepository).deserialize = function (jsonStr) {
    var tmp;
    try {
      tmp = this.dx_1.zk(Companion_getInstance_3().fv(), jsonStr);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var _unused_var__etf5q3 = $p;
        return null;
      } else {
        throw $p;
      }
    }
    var decoded = tmp;
    if (decoded.exams.o() && !(decoded.examDateIso == null)) {
      return decoded.copy(VOID, VOID, VOID, listOf(new Exam('exam-1', null, decoded.examDateIso)));
    }
    return decoded;
  };
  var StorageRepository_instance;
  function StorageRepository_getInstance() {
    if (StorageRepository_instance == null)
      new StorageRepository();
    return StorageRepository_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(TaskWeight), 'name', protoOf(TaskWeight).m1);
  defineProp(protoOf(TaskWeight), 'ordinal', protoOf(TaskWeight).n1);
  defineProp(protoOf(MonsterStatus), 'name', protoOf(MonsterStatus).m1);
  defineProp(protoOf(MonsterStatus), 'ordinal', protoOf(MonsterStatus).n1);
  defineProp(protoOf(EvolutionStage), 'name', protoOf(EvolutionStage).m1);
  defineProp(protoOf(EvolutionStage), 'ordinal', protoOf(EvolutionStage).n1);
  defineProp(protoOf(ExamKind), 'name', protoOf(ExamKind).m1);
  defineProp(protoOf(ExamKind), 'ordinal', protoOf(ExamKind).n1);
  protoOf($serializer).aj = typeParametersSerializers;
  protoOf($serializer_0).aj = typeParametersSerializers;
  protoOf($serializer_1).aj = typeParametersSerializers;
  protoOf($serializer_2).aj = typeParametersSerializers;
  protoOf($serializer_3).aj = typeParametersSerializers;
  //endregion
  //region block: init
  CramagotchiEngine_instance = new CramagotchiEngine();
  Companion_instance_2 = new Companion_2();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$cramagotchi = $com.cramagotchi || ($com.cramagotchi = {});
    var $com$cramagotchi$engine = $com$cramagotchi.engine || ($com$cramagotchi.engine = {});
    defineProp($com$cramagotchi$engine, 'CramagotchiEngine', CramagotchiEngine_getInstance);
    var $com = _.com || (_.com = {});
    var $com$cramagotchi = $com.cramagotchi || ($com.cramagotchi = {});
    var $com$cramagotchi$model = $com$cramagotchi.model || ($com$cramagotchi.model = {});
    $com$cramagotchi$model.TaskWeight = TaskWeight;
    $com$cramagotchi$model.TaskWeight.values = values;
    $com$cramagotchi$model.TaskWeight.valueOf = valueOf;
    defineProp($com$cramagotchi$model.TaskWeight, 'SNACK', TaskWeight_SNACK_getInstance);
    defineProp($com$cramagotchi$model.TaskWeight, 'MEAL', TaskWeight_MEAL_getInstance);
    $com$cramagotchi$model.MonsterStatus = MonsterStatus;
    $com$cramagotchi$model.MonsterStatus.values = values_0;
    $com$cramagotchi$model.MonsterStatus.valueOf = valueOf_0;
    defineProp($com$cramagotchi$model.MonsterStatus, 'IDLE', MonsterStatus_IDLE_getInstance);
    defineProp($com$cramagotchi$model.MonsterStatus, 'HUNGRY', MonsterStatus_HUNGRY_getInstance);
    defineProp($com$cramagotchi$model.MonsterStatus, 'EATING', MonsterStatus_EATING_getInstance);
    defineProp($com$cramagotchi$model.MonsterStatus, 'SLEEPING', MonsterStatus_SLEEPING_getInstance);
    $com$cramagotchi$model.EvolutionStage = EvolutionStage;
    $com$cramagotchi$model.EvolutionStage.values = values_1;
    $com$cramagotchi$model.EvolutionStage.valueOf = valueOf_1;
    defineProp($com$cramagotchi$model.EvolutionStage, 'EGG', EvolutionStage_EGG_getInstance);
    defineProp($com$cramagotchi$model.EvolutionStage, 'HATCHLING', EvolutionStage_HATCHLING_getInstance);
    defineProp($com$cramagotchi$model.EvolutionStage, 'SCHOLAR', EvolutionStage_SCHOLAR_getInstance);
    defineProp($com$cramagotchi$model.EvolutionStage, 'GRADUATED_BEAST', EvolutionStage_GRADUATED_BEAST_getInstance);
    $com$cramagotchi$model.ExamKind = ExamKind;
    $com$cramagotchi$model.ExamKind.values = values_2;
    $com$cramagotchi$model.ExamKind.valueOf = valueOf_2;
    defineProp($com$cramagotchi$model.ExamKind, 'DEADLINE', ExamKind_DEADLINE_getInstance);
    defineProp($com$cramagotchi$model.ExamKind, 'EXAM', ExamKind_EXAM_getInstance);
    $com$cramagotchi$model.StudyTask = StudyTask;
    defineProp($com$cramagotchi$model.StudyTask, 'Companion', Companion_getInstance);
    $com$cramagotchi$model.Exam = Exam;
    defineProp($com$cramagotchi$model.Exam, 'Companion', Companion_getInstance_0);
    $com$cramagotchi$model.MonsterState = MonsterState;
    defineProp($com$cramagotchi$model.MonsterState, 'Companion', Companion_getInstance_1);
    $com$cramagotchi$model.CollectedMonster = CollectedMonster;
    defineProp($com$cramagotchi$model.CollectedMonster, 'Companion', Companion_getInstance_2);
    $com$cramagotchi$model.AppState = AppState;
    defineProp($com$cramagotchi$model.AppState, 'Companion', Companion_getInstance_3);
    var $com = _.com || (_.com = {});
    var $com$cramagotchi = $com.cramagotchi || ($com.cramagotchi = {});
    var $com$cramagotchi$storage = $com$cramagotchi.storage || ($com$cramagotchi.storage = {});
    defineProp($com$cramagotchi$storage, 'StorageRepository', StorageRepository_getInstance);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=cramagotchi-shared-logic.js.map
