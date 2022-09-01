return(
    React.DOM.nav({className: 'navigation-dark'}, 
        [React.DOM.h1({},
            React.DOM.a(
                {href:  'http://instagram.com/rizafahmi'}, 
                'Instagram'
            )
        ),        
        React.DOM.form({},
            React.DOM.div({className: 'form-group'},[
                React.DOM.label({for: 'search'}, 'Search'),
                React.DOM.input({type: 'email', className:
                    'email'})
            ])
        ),    
        React.DOM.a({
            className: 'btn btn-primary',
            href: 'https://instagram.com'
        }, 'Get the app')
    ])
)