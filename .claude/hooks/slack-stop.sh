#!/bin/bash
# Stop 훅: 작업 완료 알림 전송
source "$PWD/.claude/.env" 2>/dev/null
curl -s -X POST -H 'Content-type: application/json' \
  --data '{"text":"✅ *[Claude Code] 작업 완료*\n작업이 종료되었습니다."}' \
  "$SLACK_WEBHOOK_URL" 2>/dev/null || true
