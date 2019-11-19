export class CategoryFilter {
  category_name: string;
  category_id: number;

  static getInstance(type: number, filterText: string): CategoryFilter {
    const f = new CategoryFilter();
    f.category_name = filterText;
    f.category_id = type;
    return f;
  }
}

export class FilterDropdownSettings {
  static dropdownSettings = {
    singleSelection: false,
    idField: 'category_id',
    textField: 'category_name',
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    allowSearchFilter: false,

  };
}

export class FilterUtil {
  static getFiltersForTasks() {
    let list = new Array<CategoryFilter>();
    list.push(CategoryFilter.getInstance(FilterType.Business_Room, 'Business Room'));
    list.push(CategoryFilter.getInstance(FilterType.Delegate_Card_Day_1_Day_2, 'Delegate Card Day 1 & Day 2'));
    list.push(CategoryFilter.getInstance(FilterType.Master_Bedroom, 'Master Bedroom'));
    list.push(CategoryFilter.getInstance(FilterType.Delegate_Card_Day_2, 'Delegate Card Day 2'));
    list.push(CategoryFilter.getInstance(FilterType.Delegate_Card_Day_1_Education_SME, 'Delegate Card Day 1 Education / SME'));


    return list;
  }
}

export enum FilterType {
  Business_Room,
  Delegate_Card_Day_1_Day_2,
  Master_Bedroom,
  Delegate_Card_Day_2,
  Delegate_Card_Day_1_Education_SME
}



