// Public visual routing only. Answers and scoring stay in Supabase.
window.WWSD_VISUAL_THEMES = (() => {
  const groups = {
    riddle: ['templates','approval','master_03','master_16','master_22'],
    chaos: ['survey','sevensteps','master_06','master_15','master_40'],
    meeting: ['launch','meeting','voluntold','master_32','master_33'],
    clock: ['signatory','emergency','deadline','master_12','master_34','master_36'],
    data: ['data','dashboard_truth','receipts_tracker','master_20','master_24','master_27','master_28','master_29','master_30','master_31','master_39'],
    people: ['feedback','talent_deck','escalation_grace','pegasus_ramp','master_35','master_37'],
    ai: ['ai','master_25','master_26'],
    paper: ['master_07','master_17','master_18','master_21','master_23'],
    contract: ['master_01','master_02','master_04','master_05','master_08','master_09','master_10','master_11','master_13','master_14','master_19','master_38'],
    final: ['apocalypse']
  };
  return Object.fromEntries(Object.entries(groups).flatMap(([theme,ids])=>ids.map(id=>[id,theme])));
})();
