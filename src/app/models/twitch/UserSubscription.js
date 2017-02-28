import {
	attr,
	Model
} from "EmberData";


export default Model.extend({
	//channel: belongsTo( "twitchChannel" ),
	created_at: attr( "date" )

}).reopenClass({
	toString() { return "kraken/users/:user_id/subscriptions"; }
});
