import React from 'react';

/**
 * we named this class with small name as it does not contain ant functional comp.
 * basically this is a js method which returns a functional comp by wrapping it into
 * a div and applying styling to it. 
 * we can make any such HOC with according to our needs. 
 * we may just wrap it, or add classes or add some JS. 
 * name WrappedComponent with caps only - so that it can be treated as a component.
 */
 
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className = { className } >
            {/* here, we need to pass the props with the person component because
            after all when we render Person, we need to access the props. 
            else, we dont have the data on the dom. we saw. */}
            <WrappedComponent { ...props }/>
        </div>
    );
}

export default withClass;