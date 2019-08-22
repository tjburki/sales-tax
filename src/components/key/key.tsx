//Packages
import * as React from 'react';

//Components
import { Percent } from '../layout/percent';

//Constants
import * as constants from '../../shared/constants';

//Interfaces
interface IKeyProps { }

export const Key: React.FC<IKeyProps> = (props: IKeyProps) =>
    <div className='font-italic'>
        <div>
            {constants.taxExemptMarker}Tax Exempt items are excluded from <Percent value={constants.salesTaxPercent} /> sales tax
        </div>
        <div>
            {constants.importedMarker}Imported items include a mandatory <Percent value={constants.importDutyTaxPercent} /> duty tax
        </div>
    </div>;