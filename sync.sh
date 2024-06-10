sshpass -p "$PASSWORD"  rsync -avu -e ssh $MEDIA $FRONT_USER@$FRONT_IP:$FRONT_MEDIA

# generate places data
res=$(curl -H "Accept: application/json" http://$BACK_IP:$BACK_PORT/places/)
echo "window.places=$res" | tr -d "\n\r" | sshpass -p "$PASSWORD" ssh "$FRONT_USER@$FRONT_IP" -T "cat > $PLACES"