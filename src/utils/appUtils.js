export function compareGreaterVersion(v1 = '', v2 = '') {
    try {
      console.log('>>>>compareGreaterVersion', {v1, v2});

      const a1 = v1.split('.');
      const a2 = v2.split('.');
      const length = a1.length > a2.length ? a2.length : a1.length;
      for (let i = 0; i < length; i++) {
        console.log('>>>>', a1[i], a2[i]);

        if (parseInt(a1[i]) > parseInt(a2[i])) {
          return true;
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
