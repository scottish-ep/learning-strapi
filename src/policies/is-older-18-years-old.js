module.exports = async (policyContext, config, next) => {
    const ageUser = policyContext.request.query.age || 0;
    console.log('check true');
    if (ageUser >= 18) { // if a session is open
      return true;
    }
    return false; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
  };
   