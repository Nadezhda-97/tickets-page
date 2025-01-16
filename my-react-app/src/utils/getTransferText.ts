import { TFunction } from 'i18next';

const getTransferText = (count: number, translate: TFunction): string => {
  switch (count) {
    case (0):
      return translate('no_transfers');
    case (1):
      return translate('transfers', { count });
    default:
      return translate('transfers_few', { count });
  }
};

export default getTransferText;
