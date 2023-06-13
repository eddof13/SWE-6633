import { BloodPressureLoginState } from 'app/pages/BloodPressureLogin/slice/types';
import { BloodPressureRegisterState } from 'app/pages/BloodPressureRegister/slice/types';
import { BloodPressureEntryState } from 'app/pages/BloodPressureEntry/slice/types';
import { BloodPressureChartState } from 'app/pages/BloodPressureChart/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  bloodPressureLogin?: BloodPressureLoginState;
  bloodPressureRegister?: BloodPressureRegisterState;
  bloodPressureEntry?: BloodPressureEntryState;
  bloodPressureChart?: BloodPressureChartState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
