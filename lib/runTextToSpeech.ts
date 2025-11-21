export interface RunTextToSpeechParams {
  text: string;
  voice: string;
  creatorId: string;
  instructions?: string;
}

/**
 * Generates speech audio for the provided text/voice combo and plays it.
 */
export const runTextToSpeech = async ({
  text,
  voice,
  creatorId,
  instructions = "Speak naturally and clearly.",
}: RunTextToSpeechParams): Promise<void> => {
  console.log(
    "Running TTS for text:",
    text,
    "with voice:",
    voice,
    "and creatorId:",
    creatorId
  );
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_2;
  if (!apiUrl) {
    console.error("API URL not configured");
    return;
  }

  try {
    // Create Audio element early to maintain user interaction context
    // This is crucial for browsers that require audio to be initiated during user interaction
    const audio = new Audio();
    audio.preload = "auto";
    
    let audioUrl: string | null = null;
    
    audio.onended = () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };

    audio.onerror = () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      console.error("Failed to play TTS audio");
    };

    const response = await fetch(`${apiUrl}/tts/speech`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        voice,
        creator_id: creatorId,
        instructions,
      }),
    });

    if (!response.ok) {
      throw new Error(`TTS request failed: ${response.statusText}`);
    }

    const audioBlob = await response.blob();
    audioUrl = URL.createObjectURL(audioBlob);
    audio.src = audioUrl;

    // Play audio and handle the promise
    try {
      await audio.play();
    } catch (playError: any) {
      // If play fails, try to resume audio context and retry
      if (playError.name === "NotAllowedError") {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioContext.state === "suspended") {
          await audioContext.resume();
        }
        await audio.play();
      } else {
        throw playError;
      }
    }
  } catch (error) {
    console.error("TTS Error:", error);
  }
};
