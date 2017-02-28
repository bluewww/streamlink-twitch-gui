import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({
	modelNameFromPayloadKey() {
		return "twitchUserSubscription";
	},

	normalizeResponse( store, primaryModelClass, payload, id, requestType ) {
		const foreignKey = this.store.serializerFor( "twitchChannel" ).primaryKey;

		// get the id of the embedded TwitchChannel record and apply it here
		payload[ this.primaryKey ] = payload.channel[ foreignKey ];

		// fix payload format
		payload = {
			twitchUserSubscription: payload
		};

		return this._super( store, primaryModelClass, payload, id, requestType );
	}
});
