var React = require('react')

module.exports = React.createClass({
    render : function() {
        return <style dangerouslySetInnerHTML={{__html: this.props.style}} />
    }
})
