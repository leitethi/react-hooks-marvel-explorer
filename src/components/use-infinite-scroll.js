import { useState, useEffect } from 'react';
import _ from 'lodash';

export default (callback) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { innerHeight, pageYOffset } = window;
      const { body: { offsetHeight } } = document;
  
      // console.log('(innerHeight + pageYOffset): ' + (innerHeight + pageYOffset));
      // console.log('offsetHeight: ' + offsetHeight);

      if ((innerHeight + Math.ceil(pageYOffset)) >= offsetHeight && !isLoading) {
        setIsLoading(true);
      
        callback();
      }
    }

    window.addEventListener('scroll', _.debounce(handleScroll, 1000));

    return () => window.removeEventListener('scroll', _.debounce(handleScroll, 1000));
  }, [isLoading, callback]);

  

  return [isLoading, setIsLoading];
}