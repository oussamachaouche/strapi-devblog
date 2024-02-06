'use strict';

/**
 * `is-admin` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  console.log(config);
  console.log(strapi);
  const {userRole} = config;
  const isElegible = policyContext.state.user && policyContext.state.user.role.name === userRole;
    // Add your own logic here.
    strapi.log.info(isElegible);

   

    if (isElegible) {
      return true;
    }

    return false;
};
