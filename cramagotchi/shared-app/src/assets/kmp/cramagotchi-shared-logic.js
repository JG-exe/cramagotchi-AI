(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cramagotchi:shared-logic'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cramagotchi:shared-logic'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'cramagotchi:shared-logic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'cramagotchi:shared-logic'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'cramagotchi:shared-logic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'cramagotchi:shared-logic'.");
    }
    root['cramagotchi:shared-logic'] = factory(typeof this['cramagotchi:shared-logic'] === 'undefined' ? {} : this['cramagotchi:shared-logic'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var removePrefix = kotlin_kotlin.$_$.c4;
  var toIntOrNull = kotlin_kotlin.$_$.h4;
  var Unit_instance = kotlin_kotlin.$_$.c1;
  var maxOrNull = kotlin_kotlin.$_$.a2;
  var protoOf = kotlin_kotlin.$_$.m3;
  var VOID = kotlin_kotlin.$_$.c;
  var copyToArray = kotlin_kotlin.$_$.n1;
  var objectMeta = kotlin_kotlin.$_$.l3;
  var setMetadataFor = kotlin_kotlin.$_$.n3;
  var defineProp = kotlin_kotlin.$_$.v2;
  var THROW_IAE = kotlin_kotlin.$_$.q4;
  var Enum = kotlin_kotlin.$_$.l4;
  var classMeta = kotlin_kotlin.$_$.u2;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.p4;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.k3;
  var getStringHashCode = kotlin_kotlin.$_$.b3;
  var getBooleanHashCode = kotlin_kotlin.$_$.y2;
  var getNumberHashCode = kotlin_kotlin.$_$.z2;
  var equals = kotlin_kotlin.$_$.w2;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var getKClass = kotlin_kotlin.$_$.b;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toString = kotlin_kotlin.$_$.p3;
  var hashCode = kotlin_kotlin.$_$.c3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Exception = kotlin_kotlin.$_$.m4;
  //endregion
  //region block: pre-declaration
  setMetadataFor(CramagotchiEngine, 'CramagotchiEngine', objectMeta);
  setMetadataFor(TaskWeight, 'TaskWeight', classMeta, Enum);
  setMetadataFor(MonsterStatus, 'MonsterStatus', classMeta, Enum);
  setMetadataFor(EvolutionStage, 'EvolutionStage', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(StudyTask, 'StudyTask', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(MonsterState, 'MonsterState', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AppState, 'AppState', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(StorageRepository, 'StorageRepository', objectMeta);
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
  function CramagotchiEngine() {
    this.ns_1 = 'task-';
  }
  protoOf(CramagotchiEngine).createInitialState = function (monsterName, now) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    return new AppState(tmp$ret$0, new MonsterState(monsterName, 0, EvolutionStage_EGG_getInstance(), MonsterStatus_IDLE_getInstance(), now));
  };
  protoOf(CramagotchiEngine).os = function (state, title, weight, now, subjectTag) {
    var newTask = new StudyTask(nextId(this, state), title, subjectTag, weight, false, now, null);
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
  protoOf(CramagotchiEngine).addTask = function (state, title, weight, now, subjectTag, $super) {
    subjectTag = subjectTag === VOID ? null : subjectTag;
    return this.os(state, title, weight, now, subjectTag);
  };
  protoOf(CramagotchiEngine).completeTask = function (state, taskId, now) {
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
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var updatedTasks = state.tasks.slice();
    updatedTasks[taskIndex] = task.copy(VOID, VOID, VOID, VOID, true, VOID, now);
    var newXp = state.monster.xp + task.weight.xpValue | 0;
    var newStage = this.calculateEvolution(newXp);
    var monster = state.monster;
    var tmp;
    if (monster.status.equals(MonsterStatus_SLEEPING_getInstance())) {
      tmp = monster.copy(VOID, newXp, newStage, VOID, now);
    } else {
      tmp = monster.copy(VOID, newXp, newStage, MonsterStatus_EATING_getInstance(), now, now + 3000.0, now + 1503000.0);
    }
    var newMonster = tmp;
    return state.copy(updatedTasks, newMonster);
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
      if (!(element.id === taskId) ? true : element.completed) {
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
      if (!(eatingEnd == null) ? now > eatingEnd : false) {
        newStatus = MonsterStatus_SLEEPING_getInstance();
        newEatingUntil = null;
      }
    }
    if (newStatus.equals(MonsterStatus_SLEEPING_getInstance())) {
      var sleepEnd = monster.sleepUntil;
      if (!(sleepEnd == null) ? now > sleepEnd : false) {
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
  protoOf(TaskWeight).rs = function () {
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
  function EvolutionStage(name, ordinal, level, minXp) {
    Enum.call(this, name, ordinal);
    this.level = level;
    this.minXp = minXp;
  }
  protoOf(EvolutionStage).ws = function () {
    return this.level;
  };
  protoOf(EvolutionStage).xs = function () {
    return this.minXp;
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ys_1 = [null, null, null, createSimpleEnumSerializer('com.cramagotchi.model.TaskWeight', values()), null, null, null];
  }
  protoOf(Companion).zs = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.StudyTask', this, 7);
    tmp0_serialDesc.vg('id', false);
    tmp0_serialDesc.vg('title', false);
    tmp0_serialDesc.vg('subjectTag', true);
    tmp0_serialDesc.vg('weight', false);
    tmp0_serialDesc.vg('completed', true);
    tmp0_serialDesc.vg('createdAt', false);
    tmp0_serialDesc.vg('completedAt', true);
    this.at_1 = tmp0_serialDesc;
  }
  protoOf($serializer).oa = function () {
    return this.at_1;
  };
  protoOf($serializer).kh = function () {
    var tmp0_cached = Companion_getInstance().ys_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3], BooleanSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(DoubleSerializer_getInstance())];
  };
  protoOf($serializer).qa = function (decoder) {
    var tmp0_desc = this.at_1;
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
    var tmp11_input = decoder.wc(tmp0_desc);
    var tmp12_cached = Companion_getInstance().ys_1;
    if (tmp11_input.gd()) {
      tmp4_local0 = tmp11_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.bd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.ed(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.cd(tmp0_desc, 3, tmp12_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.yc(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.ad(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ed(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.bd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.ed(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.cd(tmp0_desc, 3, tmp12_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.yc(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.ad(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ed(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.xc(tmp0_desc);
    return StudyTask_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer).bt = function (encoder, value) {
    var tmp0_desc = this.at_1;
    var tmp1_output = encoder.wc(tmp0_desc);
    var tmp2_cached = Companion_getInstance().ys_1;
    tmp1_output.ud(tmp0_desc, 0, value.id);
    tmp1_output.ud(tmp0_desc, 1, value.title);
    if (tmp1_output.be(tmp0_desc, 2) ? true : !(value.subjectTag == null)) {
      tmp1_output.xd(tmp0_desc, 2, StringSerializer_getInstance(), value.subjectTag);
    }
    tmp1_output.vd(tmp0_desc, 3, tmp2_cached[3], value.weight);
    if (tmp1_output.be(tmp0_desc, 4) ? true : !(value.completed === false)) {
      tmp1_output.rd(tmp0_desc, 4, value.completed);
    }
    tmp1_output.td(tmp0_desc, 5, value.createdAt);
    if (tmp1_output.be(tmp0_desc, 6) ? true : !(value.completedAt == null)) {
      tmp1_output.xd(tmp0_desc, 6, DoubleSerializer_getInstance(), value.completedAt);
    }
    tmp1_output.xc(tmp0_desc);
  };
  protoOf($serializer).pa = function (encoder, value) {
    return this.bt(encoder, value instanceof StudyTask ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function StudyTask_init_$Init$(seen1, id, title, subjectTag, weight, completed, createdAt, completedAt, serializationConstructorMarker, $this) {
    if (!(43 === (43 & seen1))) {
      throwMissingFieldException(seen1, 43, $serializer_getInstance().at_1);
    }
    $this.id = id;
    $this.title = title;
    if (0 === (seen1 & 4))
      $this.subjectTag = null;
    else
      $this.subjectTag = subjectTag;
    $this.weight = weight;
    if (0 === (seen1 & 16))
      $this.completed = false;
    else
      $this.completed = completed;
    $this.createdAt = createdAt;
    if (0 === (seen1 & 64))
      $this.completedAt = null;
    else
      $this.completedAt = completedAt;
    return $this;
  }
  function StudyTask_init_$Create$(seen1, id, title, subjectTag, weight, completed, createdAt, completedAt, serializationConstructorMarker) {
    return StudyTask_init_$Init$(seen1, id, title, subjectTag, weight, completed, createdAt, completedAt, serializationConstructorMarker, objectCreate(protoOf(StudyTask)));
  }
  function StudyTask(id, title, subjectTag, weight, completed, createdAt, completedAt) {
    Companion_getInstance();
    subjectTag = subjectTag === VOID ? null : subjectTag;
    completed = completed === VOID ? false : completed;
    completedAt = completedAt === VOID ? null : completedAt;
    this.id = id;
    this.title = title;
    this.subjectTag = subjectTag;
    this.weight = weight;
    this.completed = completed;
    this.createdAt = createdAt;
    this.completedAt = completedAt;
  }
  protoOf(StudyTask).ct = function () {
    return this.id;
  };
  protoOf(StudyTask).dt = function () {
    return this.title;
  };
  protoOf(StudyTask).et = function () {
    return this.subjectTag;
  };
  protoOf(StudyTask).ft = function () {
    return this.weight;
  };
  protoOf(StudyTask).gt = function () {
    return this.completed;
  };
  protoOf(StudyTask).ht = function () {
    return this.createdAt;
  };
  protoOf(StudyTask).it = function () {
    return this.completedAt;
  };
  protoOf(StudyTask).e9 = function () {
    return this.id;
  };
  protoOf(StudyTask).f9 = function () {
    return this.title;
  };
  protoOf(StudyTask).jt = function () {
    return this.subjectTag;
  };
  protoOf(StudyTask).kt = function () {
    return this.weight;
  };
  protoOf(StudyTask).lt = function () {
    return this.completed;
  };
  protoOf(StudyTask).mt = function () {
    return this.createdAt;
  };
  protoOf(StudyTask).nt = function () {
    return this.completedAt;
  };
  protoOf(StudyTask).ot = function (id, title, subjectTag, weight, completed, createdAt, completedAt) {
    return new StudyTask(id, title, subjectTag, weight, completed, createdAt, completedAt);
  };
  protoOf(StudyTask).copy = function (id, title, subjectTag, weight, completed, createdAt, completedAt, $super) {
    id = id === VOID ? this.id : id;
    title = title === VOID ? this.title : title;
    subjectTag = subjectTag === VOID ? this.subjectTag : subjectTag;
    weight = weight === VOID ? this.weight : weight;
    completed = completed === VOID ? this.completed : completed;
    createdAt = createdAt === VOID ? this.createdAt : createdAt;
    completedAt = completedAt === VOID ? this.completedAt : completedAt;
    return this.ot(id, title, subjectTag, weight, completed, createdAt, completedAt);
  };
  protoOf(StudyTask).toString = function () {
    return 'StudyTask(id=' + this.id + ', title=' + this.title + ', subjectTag=' + this.subjectTag + ', weight=' + this.weight + ', completed=' + this.completed + ', createdAt=' + this.createdAt + ', completedAt=' + this.completedAt + ')';
  };
  protoOf(StudyTask).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.title) | 0;
    result = imul(result, 31) + (this.subjectTag == null ? 0 : getStringHashCode(this.subjectTag)) | 0;
    result = imul(result, 31) + this.weight.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.completed) | 0;
    result = imul(result, 31) + getNumberHashCode(this.createdAt) | 0;
    result = imul(result, 31) + (this.completedAt == null ? 0 : getNumberHashCode(this.completedAt)) | 0;
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
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pt_1 = [null, null, createSimpleEnumSerializer('com.cramagotchi.model.EvolutionStage', values_1()), createSimpleEnumSerializer('com.cramagotchi.model.MonsterStatus', values_0()), null, null, null];
  }
  protoOf(Companion_0).zs = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.MonsterState', this, 7);
    tmp0_serialDesc.vg('name', true);
    tmp0_serialDesc.vg('xp', true);
    tmp0_serialDesc.vg('stage', true);
    tmp0_serialDesc.vg('status', true);
    tmp0_serialDesc.vg('lastFedAt', false);
    tmp0_serialDesc.vg('eatingUntil', true);
    tmp0_serialDesc.vg('sleepUntil', true);
    this.qt_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).oa = function () {
    return this.qt_1;
  };
  protoOf($serializer_0).kh = function () {
    var tmp0_cached = Companion_getInstance_0().pt_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], DoubleSerializer_getInstance(), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance())];
  };
  protoOf($serializer_0).qa = function (decoder) {
    var tmp0_desc = this.qt_1;
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
    var tmp11_input = decoder.wc(tmp0_desc);
    var tmp12_cached = Companion_getInstance_0().pt_1;
    if (tmp11_input.gd()) {
      tmp4_local0 = tmp11_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.zc(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.cd(tmp0_desc, 2, tmp12_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.cd(tmp0_desc, 3, tmp12_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.ad(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.ed(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ed(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.zc(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.cd(tmp0_desc, 2, tmp12_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.cd(tmp0_desc, 3, tmp12_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.ad(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.ed(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ed(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.xc(tmp0_desc);
    return MonsterState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_0).rt = function (encoder, value) {
    var tmp0_desc = this.qt_1;
    var tmp1_output = encoder.wc(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().pt_1;
    if (tmp1_output.be(tmp0_desc, 0) ? true : !(value.name === 'Munch')) {
      tmp1_output.ud(tmp0_desc, 0, value.name);
    }
    if (tmp1_output.be(tmp0_desc, 1) ? true : !(value.xp === 0)) {
      tmp1_output.sd(tmp0_desc, 1, value.xp);
    }
    if (tmp1_output.be(tmp0_desc, 2) ? true : !value.stage.equals(EvolutionStage_EGG_getInstance())) {
      tmp1_output.vd(tmp0_desc, 2, tmp2_cached[2], value.stage);
    }
    if (tmp1_output.be(tmp0_desc, 3) ? true : !value.status.equals(MonsterStatus_IDLE_getInstance())) {
      tmp1_output.vd(tmp0_desc, 3, tmp2_cached[3], value.status);
    }
    tmp1_output.td(tmp0_desc, 4, value.lastFedAt);
    if (tmp1_output.be(tmp0_desc, 5) ? true : !(value.eatingUntil == null)) {
      tmp1_output.xd(tmp0_desc, 5, DoubleSerializer_getInstance(), value.eatingUntil);
    }
    if (tmp1_output.be(tmp0_desc, 6) ? true : !(value.sleepUntil == null)) {
      tmp1_output.xd(tmp0_desc, 6, DoubleSerializer_getInstance(), value.sleepUntil);
    }
    tmp1_output.xc(tmp0_desc);
  };
  protoOf($serializer_0).pa = function (encoder, value) {
    return this.rt(encoder, value instanceof MonsterState ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function MonsterState_init_$Init$(seen1, name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil, serializationConstructorMarker, $this) {
    if (!(16 === (16 & seen1))) {
      throwMissingFieldException(seen1, 16, $serializer_getInstance_0().qt_1);
    }
    if (0 === (seen1 & 1))
      $this.name = 'Munch';
    else
      $this.name = name;
    if (0 === (seen1 & 2))
      $this.xp = 0;
    else
      $this.xp = xp;
    if (0 === (seen1 & 4))
      $this.stage = EvolutionStage_EGG_getInstance();
    else
      $this.stage = stage;
    if (0 === (seen1 & 8))
      $this.status = MonsterStatus_IDLE_getInstance();
    else
      $this.status = status;
    $this.lastFedAt = lastFedAt;
    if (0 === (seen1 & 32))
      $this.eatingUntil = null;
    else
      $this.eatingUntil = eatingUntil;
    if (0 === (seen1 & 64))
      $this.sleepUntil = null;
    else
      $this.sleepUntil = sleepUntil;
    return $this;
  }
  function MonsterState_init_$Create$(seen1, name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil, serializationConstructorMarker) {
    return MonsterState_init_$Init$(seen1, name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil, serializationConstructorMarker, objectCreate(protoOf(MonsterState)));
  }
  function MonsterState(name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil) {
    Companion_getInstance_0();
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
  protoOf(MonsterState).x6 = function () {
    return this.name;
  };
  protoOf(MonsterState).st = function () {
    return this.xp;
  };
  protoOf(MonsterState).tt = function () {
    return this.stage;
  };
  protoOf(MonsterState).ut = function () {
    return this.status;
  };
  protoOf(MonsterState).vt = function () {
    return this.lastFedAt;
  };
  protoOf(MonsterState).wt = function () {
    return this.eatingUntil;
  };
  protoOf(MonsterState).xt = function () {
    return this.sleepUntil;
  };
  protoOf(MonsterState).e9 = function () {
    return this.name;
  };
  protoOf(MonsterState).f9 = function () {
    return this.xp;
  };
  protoOf(MonsterState).jt = function () {
    return this.stage;
  };
  protoOf(MonsterState).kt = function () {
    return this.status;
  };
  protoOf(MonsterState).lt = function () {
    return this.lastFedAt;
  };
  protoOf(MonsterState).mt = function () {
    return this.eatingUntil;
  };
  protoOf(MonsterState).nt = function () {
    return this.sleepUntil;
  };
  protoOf(MonsterState).yt = function (name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil) {
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
    return this.yt(name, xp, stage, status, lastFedAt, eatingUntil, sleepUntil);
  };
  protoOf(MonsterState).toString = function () {
    return 'MonsterState(name=' + this.name + ', xp=' + this.xp + ', stage=' + this.stage + ', status=' + this.status + ', lastFedAt=' + this.lastFedAt + ', eatingUntil=' + this.eatingUntil + ', sleepUntil=' + this.sleepUntil + ')';
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
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zt_1 = [new ReferenceArraySerializer(getKClass(StudyTask), $serializer_getInstance()), null, null];
  }
  protoOf(Companion_1).zs = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cramagotchi.model.AppState', this, 3);
    tmp0_serialDesc.vg('tasks', true);
    tmp0_serialDesc.vg('monster', false);
    tmp0_serialDesc.vg('examDateIso', true);
    this.au_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).oa = function () {
    return this.au_1;
  };
  protoOf($serializer_1).kh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_1().zt_1[0], $serializer_getInstance_0(), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_1).qa = function (decoder) {
    var tmp0_desc = this.au_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.wc(tmp0_desc);
    var tmp8_cached = Companion_getInstance_1().zt_1;
    if (tmp7_input.gd()) {
      tmp4_local0 = tmp7_input.cd(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.cd(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ed(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.cd(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.cd(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ed(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.xc(tmp0_desc);
    return AppState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).bu = function (encoder, value) {
    var tmp0_desc = this.au_1;
    var tmp1_output = encoder.wc(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().zt_1;
    var tmp;
    if (tmp1_output.be(tmp0_desc, 0)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      tmp = !equals(value.tasks, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.vd(tmp0_desc, 0, tmp2_cached[0], value.tasks);
    }
    tmp1_output.vd(tmp0_desc, 1, $serializer_getInstance_0(), value.monster);
    if (tmp1_output.be(tmp0_desc, 2) ? true : !(value.examDateIso == null)) {
      tmp1_output.xd(tmp0_desc, 2, StringSerializer_getInstance(), value.examDateIso);
    }
    tmp1_output.xc(tmp0_desc);
  };
  protoOf($serializer_1).pa = function (encoder, value) {
    return this.bu(encoder, value instanceof AppState ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function AppState_init_$Init$(seen1, tasks, monster, examDateIso, serializationConstructorMarker, $this) {
    if (!(2 === (2 & seen1))) {
      throwMissingFieldException(seen1, 2, $serializer_getInstance_1().au_1);
    }
    if (0 === (seen1 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.emptyArray' call
      tmp.tasks = [];
    } else
      $this.tasks = tasks;
    $this.monster = monster;
    if (0 === (seen1 & 4))
      $this.examDateIso = null;
    else
      $this.examDateIso = examDateIso;
    return $this;
  }
  function AppState_init_$Create$(seen1, tasks, monster, examDateIso, serializationConstructorMarker) {
    return AppState_init_$Init$(seen1, tasks, monster, examDateIso, serializationConstructorMarker, objectCreate(protoOf(AppState)));
  }
  function AppState(tasks, monster, examDateIso) {
    Companion_getInstance_1();
    var tmp;
    if (tasks === VOID) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tasks;
    }
    tasks = tmp;
    examDateIso = examDateIso === VOID ? null : examDateIso;
    this.tasks = tasks;
    this.monster = monster;
    this.examDateIso = examDateIso;
  }
  protoOf(AppState).cu = function () {
    return this.tasks;
  };
  protoOf(AppState).du = function () {
    return this.monster;
  };
  protoOf(AppState).eu = function () {
    return this.examDateIso;
  };
  protoOf(AppState).e9 = function () {
    return this.tasks;
  };
  protoOf(AppState).f9 = function () {
    return this.monster;
  };
  protoOf(AppState).jt = function () {
    return this.examDateIso;
  };
  protoOf(AppState).fu = function (tasks, monster, examDateIso) {
    return new AppState(tasks, monster, examDateIso);
  };
  protoOf(AppState).copy = function (tasks, monster, examDateIso, $super) {
    tasks = tasks === VOID ? this.tasks : tasks;
    monster = monster === VOID ? this.monster : monster;
    examDateIso = examDateIso === VOID ? this.examDateIso : examDateIso;
    return this.fu(tasks, monster, examDateIso);
  };
  protoOf(AppState).toString = function () {
    return 'AppState(tasks=' + toString(this.tasks) + ', monster=' + this.monster + ', examDateIso=' + this.examDateIso + ')';
  };
  protoOf(AppState).hashCode = function () {
    var result = hashCode(this.tasks);
    result = imul(result, 31) + this.monster.hashCode() | 0;
    result = imul(result, 31) + (this.examDateIso == null ? 0 : getStringHashCode(this.examDateIso)) | 0;
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
  function StorageRepository$json$lambda($this$Json) {
    $this$Json.ck_1 = true;
    $this$Json.ak_1 = true;
    return Unit_instance;
  }
  function StorageRepository() {
    StorageRepository_instance = this;
    this.STORAGE_KEY = 'cramagotchi_state';
    var tmp = this;
    tmp.gu_1 = Json(VOID, StorageRepository$json$lambda);
  }
  protoOf(StorageRepository).hu = function () {
    return this.STORAGE_KEY;
  };
  protoOf(StorageRepository).serialize = function (state) {
    return this.gu_1.jj(Companion_getInstance_1().zs(), state);
  };
  protoOf(StorageRepository).deserialize = function (jsonStr) {
    var tmp;
    try {
      tmp = this.gu_1.kj(Companion_getInstance_1().zs(), jsonStr);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var _ = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var StorageRepository_instance;
  function StorageRepository_getInstance() {
    if (StorageRepository_instance == null)
      new StorageRepository();
    return StorageRepository_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(TaskWeight), 'name', protoOf(TaskWeight).x6);
  defineProp(protoOf(TaskWeight), 'ordinal', protoOf(TaskWeight).y6);
  defineProp(protoOf(MonsterStatus), 'name', protoOf(MonsterStatus).x6);
  defineProp(protoOf(MonsterStatus), 'ordinal', protoOf(MonsterStatus).y6);
  defineProp(protoOf(EvolutionStage), 'name', protoOf(EvolutionStage).x6);
  defineProp(protoOf(EvolutionStage), 'ordinal', protoOf(EvolutionStage).y6);
  protoOf($serializer).lh = typeParametersSerializers;
  protoOf($serializer_0).lh = typeParametersSerializers;
  protoOf($serializer_1).lh = typeParametersSerializers;
  //endregion
  //region block: init
  CramagotchiEngine_instance = new CramagotchiEngine();
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
    $com$cramagotchi$model.StudyTask = StudyTask;
    defineProp($com$cramagotchi$model.StudyTask, 'Companion', Companion_getInstance);
    $com$cramagotchi$model.MonsterState = MonsterState;
    defineProp($com$cramagotchi$model.MonsterState, 'Companion', Companion_getInstance_0);
    $com$cramagotchi$model.AppState = AppState;
    defineProp($com$cramagotchi$model.AppState, 'Companion', Companion_getInstance_1);
    var $com = _.com || (_.com = {});
    var $com$cramagotchi = $com.cramagotchi || ($com.cramagotchi = {});
    var $com$cramagotchi$storage = $com$cramagotchi.storage || ($com$cramagotchi.storage = {});
    defineProp($com$cramagotchi$storage, 'StorageRepository', StorageRepository_getInstance);
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=cramagotchi-shared-logic.js.map
